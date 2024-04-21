import * as fs from 'fs';
import { JsonPatch, TextFile } from 'projen';
import { JsiiProject, JsiiProjectOptions } from 'projen/lib/cdk';
import { GithubWorkflow } from 'projen/lib/github';
import { YamlTransformer, Element, YamlElement, YamlTree } from '../yaml';

interface GithubWorkflowOptions {
  /**
   * The path to the workflow file
   */
  readonly workflow: GithubWorkflow;

  /**
   * The version of the runner OS
   */
  readonly runner: Element;

  /**
   * The with property in the actions/checkout
   */
  readonly checkoutToken: Element;
}

export interface JsiiProjectPatchOptions extends JsiiProjectOptions {
  /**
   * The options to be passed to the .npmrc file.
   * @default - {}
   * @see https://docs.npmjs.com/cli/v7/configuring-npm/npmrc
   */
  npmrcOptions: {
    name: string;
    value: string;
  }[];
}

interface VersionDefinition {
  currentDigest: string;
  currentValue: string;
  currentVersion: string;
  datasource: string;
  depType: string;
  manager: string;
}

export class JsiiProjectPatch extends JsiiProject {
  constructor(options: JsiiProjectPatchOptions) {
    const versionFilePath = 'version.json';

    const rawData = fs.readFileSync(versionFilePath, 'utf-8');

    const versions = JSON.parse(rawData) as Record<string, VersionDefinition>;

    const pnpmVersion = versions.pnpm.currentVersion;
    const pnpmDigest = versions.pnpm.currentDigest;

    const patchOptions: Pick<JsiiProjectOptions, 'pnpmVersion'> = {
      pnpmVersion,
    };

    const projectOptions: JsiiProjectOptions = {
      ...options,
      ...patchOptions,
    };

    super(projectOptions);

    this.addFields({
      packageManager: `pnpm@${pnpmVersion}+${pnpmDigest}`,
    });

    // TODO: Remove dependency after ts-node@11 is published
    // https://github.com/TypeStrong/ts-node/issues/2077
    this.addDevDeps('ts-node@beta');

    // NPM metadata
    this.addKeywords('projen');

    const renovateFilePath = 'renovate.json5';
    const renovate = this.tryFindObjectFile(renovateFilePath);
    renovate?.addToArray('extends', 'helpers:pinGitHubActionDigests');

    // Create .npmrc that is not being created by default by projen.
    options.npmrcOptions.forEach((o) => this.npmrc.addConfig(o.name, o.value));

    const renovateGithubActionsManager = 'github-actions';

    Object.entries(versions)
      .filter(([_, definition]) => definition.manager === renovateGithubActionsManager)
      .forEach(([depName, definition]) => {
        const override = `${depName}@${definition.currentDigest}`;
        this.github?.actions.set(depName, override);
      });

    renovate?.patch(JsonPatch.add('/ignorePaths', ['.github/workflows/*.yml']));

    renovate?.addToArray(
      'packageRules',
      // Pin digests for dependencies in version.json
      {
        enabled: true,
        matchFileNames: ['version.json'],
        pinDigests: true,
      },
      // Group Github Actions dependencies together
      {
        groupName: 'github-actions',
        matchDatasources: ['github-tags'],
      },
      // Ignore the packageManager field in package.json, because it's being upgraded in version.json
      {
        matchFileNames: ['package.json'],
        matchDatasources: ['npm'],
        matchDepTypes: ['packageManager'],
        enabled: false,
      }
    );

    const releaseWorkflow = this.github!.tryFindWorkflow('release')!;

    releaseWorkflow?.file?.addOverride('on.push.paths-ignore', [
      // don't do a release if the change was only to these files/directories
      '.github/**/*.md',
    ]);
  }

  /**
   * @todo Move the logic to a constructor using ObjectFile json and then parse it with yaml.parse and add the comments, to convert it to a TextFile before synthetizing it.
   */
  postSynthesize() {
    const runner: Element = { value: 'ubuntu-22.04' };

    const checkoutToken: Element = { value: this.github!.projenCredentials.tokenRef };

    const buildWorkflow = this.github!.tryFindWorkflow('build')!;
    const buildFile = this.configureBuild({ workflow: buildWorkflow, runner, /*actions, */ checkoutToken });
    buildFile.synthesize();

    const releaseWorkflow = this.github!.tryFindWorkflow('release')!;
    const releaseFile = this.configureRelease({ workflow: releaseWorkflow, runner, /*actions, */ checkoutToken });
    releaseFile.synthesize();
  }

  /**
   * Configure the GitHub workflow.
   * @param project The project to configure
   * @param options The options to configure the workflow
   */
  private configure(options: { workflow: GithubWorkflow; transformations: YamlElement[] }) {
    // TODO: Convert into RenovateAwareProject to format everything inside the project
    // TODO: Or add a formatter as an Aspect of the project
    const workflowPath = options.workflow.file!.path;
    const transformer = new YamlTransformer({ path: workflowPath });

    const transformed = transformer.apply(options.transformations);

    this.tryRemoveFile(workflowPath);

    const lines = transformed.split('\n');

    return new TextFile(this, workflowPath, {
      marker: true,
      lines,
    });
  }

  /**
   * Configure the build GitHub workflow.
   * @param project The project to configure
   * @param path The path to the workflow file
   */
  private configureBuild(options: GithubWorkflowOptions) {
    const buildJobTree = new YamlTree({ path: ['jobs', 'build'] });
    const buildJobVersions = buildJobTree
      .addChildren([
        {
          path: ['steps', 0, 'with', 'token'],
          element: options.checkoutToken,
        },
        {
          path: ['runs-on'],
          element: options.runner,
        },
      ])
      .descendTo(['steps'])
      .createTransformations();

    const selfMutationJobTree = new YamlTree({ path: ['jobs', 'self-mutation'] });
    const selfMutationJobVersions = selfMutationJobTree
      .addChildren([
        {
          path: ['runs-on'],
          element: options.runner,
        },
      ])
      .descendTo(['steps'])
      .createTransformations();

    const packageJsJobTree = new YamlTree({ path: ['jobs', 'package-js'] });
    const packageJsJobVersions = packageJsJobTree
      .addChildren([
        {
          path: ['runs-on'],
          element: options.runner,
        },
      ])
      .descendTo(['steps'])
      .createTransformations();

    return this.configure({
      workflow: options.workflow,
      transformations: [...buildJobVersions, ...selfMutationJobVersions, ...packageJsJobVersions],
    });
  }

  /**
   * Configure the release GitHub workflow.
   * @param path The path to the workflow file
   * @param project The project to configure
   */
  private configureRelease(options: GithubWorkflowOptions) {
    const releaseJobTree = new YamlTree({ path: ['jobs', 'release'] });
    const releaseJobVersions = releaseJobTree
      .addChildren([
        {
          path: ['steps', 0, 'with', 'token'],
          element: options.checkoutToken,
        },
        {
          path: ['runs-on'],
          element: options.runner,
        },
      ])
      .createTransformations();

    const releaseGithubJobTree = new YamlTree({ path: ['jobs', 'release_github'] });
    const releaseGithubJobVersions = releaseGithubJobTree
      .addChildren([
        {
          path: ['runs-on'],
          element: options.runner,
        },
      ])
      .descendTo(['steps'])
      .createTransformations();

    const releaseNpmJobTree = new YamlTree({ path: ['jobs', 'release_npm'] });
    const releaseNpmJobVersions = releaseNpmJobTree
      .addChildren([
        {
          path: ['runs-on'],
          element: options.runner,
        },
      ])
      .descendTo(['steps'])
      .createTransformations();

    return this.configure({
      workflow: options.workflow,
      transformations: [...releaseJobVersions, ...releaseGithubJobVersions, ...releaseNpmJobVersions],
    });
  }
}
