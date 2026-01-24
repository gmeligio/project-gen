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
  // readonly checkoutToken: Element;
}

export interface JsiiProjectPatchOptions extends JsiiProjectOptions {
  /**
   * The options to be passed to the .npmrc file.
   * @default - {}
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/npmrc
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

    const patchOptions: Pick<JsiiProjectOptions, 'pnpmVersion' | 'logging' | 'mergify'> = {
      // Removed because it's not being used in any place.
      // It used to be used in .github/workflows/build.yml > pnpm/action-setup > with
      // The PNPM version is currently set in package.json > packageManager
      pnpmVersion,
      // logging: { level: LogLevel.DEBUG },
      mergify: false
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

    // Workaround the override of build and release workflows properties that can't be modified through the usual project settings
    this.configureRelease();
    this.configureBuild();
  }

  private configureBuild() {
    const buildWorkflow = this.github!.tryFindWorkflow('build')!;

    // Delete `with: <pnpm-version>` and unnecessary fields in `build` job after moving actions in steps
    buildWorkflow?.file?.addDeletionOverride('jobs.build.steps.1.with');

    // Replace self-mutation step 5 (Push changes) with grafana/github-api-commit-action
    // This creates signed commits via GitHub API without requiring GPG keys
    // The Signed-off-by trailer is included in the commit message for DCO compliance
    buildWorkflow?.file?.addDeletionOverride('jobs.self-mutation.steps.5.run');
    buildWorkflow?.file?.addDeletionOverride('jobs.self-mutation.steps.5.env');
    buildWorkflow?.file?.addOverride(
      'jobs.self-mutation.steps.5.uses',
      'grafana/github-api-commit-action@b1d81091e8480dd11fcea8bc1f0ab977a0376ca5'
    );
    buildWorkflow?.file?.addOverride('jobs.self-mutation.steps.5.with', {
      'commit-message': 'chore: self mutation\n\nSigned-off-by: github-actions <github-actions@github.com>',
      'stage-all-files': true,
      'success-if-no-changes': true,
      token: '${{ steps.generate_token.outputs.token }}',
    });
  }

  private configureRelease() {
    const releaseWorkflow = this.github!.tryFindWorkflow('release')!;
    releaseWorkflow?.file?.addOverride('on.push.paths-ignore', [
      // don't do a release if the change was only to these files/directories
      '.github/**/*.md',
    ]);

    // Delete `with: <pnpm-version>` and unnecessary fields in `release` job after moving actions in steps
    releaseWorkflow?.file?.addDeletionOverride('jobs.release.steps.2.with');
  }

  /**
   * @todo Move the logic to a constructor using ObjectFile json and then parse it with yaml.parse and add the comments, to convert it to a TextFile before synthetizing it.
   */
  postSynthesize() {
    const runner: Element = { value: 'ubuntu-22.04' };

    // const checkoutToken: Element = { value: this.github!.projenCredentials.tokenRef };

    const buildWorkflow = this.github!.tryFindWorkflow('build')!;
    const buildFile = this.createBuildWithWorkarounds({ workflow: buildWorkflow, runner /*actions,  checkoutToken*/ });
    buildFile.synthesize();

    const releaseWorkflow = this.github!.tryFindWorkflow('release')!;
    const releaseFile = this.createReleaseWithWorkarounds({
      workflow: releaseWorkflow,
      runner /*actions,  checkoutToken*/,
    });
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

    // Doing tryRemoveFile here causes that the projen marker in the first line doesn't appear in the new TextFile
    this.tryRemoveFile(workflowPath);

    const lines = transformed.split('\n');

    return new TextFile(this, workflowPath, {
      lines,
    });
  }

  /**
   * Configure the build GitHub workflow.
   * @param project The project to configure
   * @param path The path to the workflow file
   */
  private createBuildWithWorkarounds(options: GithubWorkflowOptions) {
    const buildJobTree = new YamlTree({ path: ['jobs', 'build'] });
    const buildJobPatches = buildJobTree
      .addChildren([
        {
          path: ['runs-on'],
          element: options.runner,
        },
        // {
        //   path: ['steps', 0, 'with', 'token'],
        //   element: options.checkoutToken,
        // },
        // {
        //   path: ['steps', 6, 'with', 'include-hidden-files'],
        //   element: {
        //     value: 'true',
        //   },
        // },
        // {
        //   path: ['steps', 9, 'with', 'include-hidden-files'],
        //   element: {
        //     value: 'true',
        //   },
        // },
      ])
      // .descendTo(['steps'])
      .createTransformations();

    const selfMutationJobTree = new YamlTree({ path: ['jobs', 'self-mutation'] });
    const selfMutationJobPatches = selfMutationJobTree
      .addChildren([
        {
          path: ['runs-on'],
          element: options.runner,
        },
      ])
      .createTransformations();

    const packageJsJobTree = new YamlTree({ path: ['jobs', 'package-js'] });
    const packageJsJobPatches = packageJsJobTree
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
      transformations: [...buildJobPatches, ...selfMutationJobPatches, ...packageJsJobPatches],
    });
  }

  /**
   * Configure the release GitHub workflow.
   * @param path The path to the workflow file
   * @param project The project to configure
   */
  private createReleaseWithWorkarounds(options: GithubWorkflowOptions) {
    const releaseJobTree = new YamlTree({ path: ['jobs', 'release'] });
    const releaseJobPatches = releaseJobTree
      .addChildren([
        {
          path: ['runs-on'],
          element: options.runner,
        },
        // {
        //   path: ['steps', 0, 'with', 'token'],
        //   element: options.checkoutToken,
        // },
      ])
      .createTransformations();

    const releaseGithubJobTree = new YamlTree({ path: ['jobs', 'release_github'] });
    const releaseGithubJobPatches = releaseGithubJobTree
      .addChildren([
        {
          path: ['runs-on'],
          element: options.runner,
        },
      ])
      .descendTo(['steps'])
      .createTransformations();

    const releaseNpmJobTree = new YamlTree({ path: ['jobs', 'release_npm'] });
    const releaseNpmJobPatches = releaseNpmJobTree
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
      transformations: [...releaseJobPatches, ...releaseGithubJobPatches, ...releaseNpmJobPatches],
    });
  }
}
