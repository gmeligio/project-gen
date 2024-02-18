import * as fs from 'fs';
import { JsonPatch, TextFile } from 'projen';
import { JsiiProject, JsiiProjectOptions } from 'projen/lib/cdk';
import { YamlTransformer, Element, YamlElement, YamlTree } from '../yaml';

// type Action = 'actionsCheckout' | 'actionsSetupNode' | 'actionsUploadArtifact' | 'actionsDownloadArtifact';

// type ActionVersions = Record<Action, Element>;

interface GithubWorkflowOptions {
  /**
   * The path to the workflow file
   */
  readonly path: string;

  /**
   * The version of the runner OS
   */
  readonly runner: Element;

  /**
   * The versions of the actions
   */
  // readonly actions: ActionVersions;

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
    super(options);

    // TODO: Remove dependency after ts-node@11 is published
    // https://github.com/TypeStrong/ts-node/issues/2077
    this.addDevDeps('ts-node@github:TypeStrong/ts-node#semver:v11.0.0-beta.1');

    // NPM metadata
    this.addKeywords('projen');

    const versionFilePath = 'version.json';

    const renovateGithubActionsManager = 'github-actions';

    const renovateFilePath = 'renovate.json5';
    const renovate = this.tryFindObjectFile(renovateFilePath);
    renovate?.addToArray('extends', 'helpers:pinGitHubActionDigests');

    // Create .npmrc that is not being created by default by projen.
    options.npmrcOptions.forEach((o) => this.npmrc.addConfig(o.name, o.value));

    const rawData = fs.readFileSync(versionFilePath, 'utf-8');

    const versions = JSON.parse(rawData) as Record<string, VersionDefinition>;

    Object.entries(versions)
      .filter(([_, definition]) => definition.manager === renovateGithubActionsManager)
      .forEach(([depName, definition]) => {
        const override = `${depName}@${definition.currentDigest}`;
        this.github?.actions.set(depName, override);
      });

    renovate?.patch(JsonPatch.add('/ignorePaths', ['.github/workflows/*.yml']));

    renovate?.addToArray(
      'packageRules',
      {
        enabled: true,
        matchFileNames: ['version.json'],
        pinDigests: true,
      },
      {
        groupName: 'github-actions',
        matchDatasources: ['github-tags'],
      }
    );

    // const releaseWorkflowPath = '.github/workflows/release.yml';
    // const releaseWorkflow = this.tryFindObjectFile(releaseWorkflowPath);
    // releaseWorkflow?.addOverride('jobs.release_npm.steps.8.env.run', 'asdas');
    // releaseWorkflow?.addOverride('jobs.release_npm.steps.0.name', 'asdas');

    const releaseWorkflowPath = '.github/workflows/release.yml';
    const releaseWorkflow = this.tryFindObjectFile(releaseWorkflowPath);

    // releaseWorkflow?.patch(
    //   // Add id-token permission for provenance https://docs.npmjs.com/generating-provenance-statements#publishing-packages-with-provenance-via-github-actions
    //   JsonPatch.add('/jobs/release_npm/permissions/id-token', 'write')
    // );

    releaseWorkflow?.addOverride('on.push.paths-ignore', [
      // don't do a release if the change was only to these files/directories
      '.github/**/*.md',
    ]);
  }

  /**
   * @todo Move the logic to a constructor using ObjectFile json and then parse it with yaml.parse and add the comments, to convert it to a TextFile before synthetizing it.
   */
  postSynthesize() {
    // const buildWorkflow = project.tryFindObjectFile('.github/workflows/build.yml');
    // buildWorkflow?.addOverride('jobs.build.runs-on', 'ubuntu-22.04');

    const runner: Element = { value: 'ubuntu-22.04' };
    // const actions: ActionVersions = {
    //   actionsCheckout: {
    //     value: 'actions/checkout@8ade135a41bc03ea155e62e844d188df1ea18608',
    //     comment: ' v4',
    //   },
    //   actionsSetupNode: {
    //     value: 'actions/setup-node@5e21ff4d9bc1a8cf6de233a3057d20ec6b3fb69d',
    //     comment: ' v3',
    //   },
    //   actionsUploadArtifact: {
    //     value: 'actions/upload-artifact@a8a3f3ad30e3422c9c7b888a15615d19a852ae32',
    //     comment: ' v3',
    //   },
    //   actionsDownloadArtifact: {
    //     value: 'actions/download-artifact@9bc31d5ccc31df68ecc42ccf4149144866c47d8a',
    //     comment: ' v3',
    //   },
    // };

    const checkoutToken: Element = { value: this.github!.projenCredentials.tokenRef };

    const buildWorkflowPath = '.github/workflows/build.yml';
    const buildFile = this.configureBuild({ path: buildWorkflowPath, runner, /*actions, */ checkoutToken });
    buildFile.synthesize();

    // const releaseWorkflowPath = '.github/workflows/release.yml';
    // const releaseWorkflow = this.tryFindObjectFile(releaseWorkflowPath);
    // releaseWorkflow?.addOverride('jobs.release_npm.steps.7.env.NPM_DIST_TAG', 'asdas');
    // releaseWorkflow?.addOverride('jobs.release_npm.steps.0.name', 'asdas');
    // releaseWorkflow?.synthesize();

    // const releaseWorkflow = this.github?.tryFindWorkflow('release');

    // if (releaseWorkflow) {
    //   const releaseNpmJob = releaseWorkflow.getJob('release_npm');

    //   if (releaseNpmJob) {
    //     releaseWorkflow.updateJob('release_npm', {
    //       ...releaseNpmJob,
    //       steps: [
    //         ...(releaseNpmJob as workflows.Job).steps,
    //         {
    //           name: 'Upload artifact',
    //           uses: 'actions/upload-artifact',
    //           with: {
    //             name: 'npm-package',
    //             path: 'dist',
    //           },
    //         },
    //       ],
    //     });
    //   }

    //   console.log('synthetizing');

    //   releaseWorkflow.synthesize();
    // }

    const releaseWorkflowPath = '.github/workflows/release.yml';
    const releaseFile = this.configureRelease({ path: releaseWorkflowPath, runner, /*actions, */ checkoutToken });
    releaseFile.synthesize();
  }

  /**
   * Configure the GitHub workflow.
   * @param project The project to configure
   * @param options The options to configure the workflow
   */
  private configure(options: { path: string; transformations: YamlElement[] }) {
    // TODO: Convert into RenovateAwareProject to format everything inside the project
    // TODO: Or add a formatter as an Aspect of the project
    const transformer = new YamlTransformer({ path: options.path });

    const transformed = transformer.apply(options.transformations);

    this.tryRemoveFile(options.path);

    const lines = transformed.split('\n');

    return new TextFile(this, options.path, {
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
      // .addChildren([
      //   {
      //     path: [0, 'uses'],
      //     element: options.actions.actionsCheckout,
      //   },
      //   {
      //     path: [1, 'uses'],
      //     element: options.actions.actionsSetupNode,
      //   },
      //   {
      //     path: [5, 'uses'],
      //     element: options.actions.actionsUploadArtifact,
      //   },
      //   {
      //     path: [8, 'uses'],
      //     element: options.actions.actionsUploadArtifact,
      //   },
      // ])
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
      // .addChildren([
      //   {
      //     path: [0, 'uses'],
      //     element: options.actions.actionsCheckout,
      //   },
      //   {
      //     path: [1, 'uses'],
      //     element: options.actions.actionsDownloadArtifact,
      //   },
      // ])
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
      // .addChildren([
      //   {
      //     path: [0, 'uses'],
      //     element: options.actions.actionsSetupNode,
      //   },
      //   {
      //     path: [1, 'uses'],
      //     element: options.actions.actionsDownloadArtifact,
      //   },
      // ])
      .createTransformations();

    return this.configure({
      path: options.path,
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
      // .descendTo(['steps'])
      // .addChildren([
      //   {
      //     path: [0, 'uses'],
      //     element: options.actions.actionsCheckout,
      //   },
      //   {
      //     path: [2, 'uses'],
      //     element: options.actions.actionsSetupNode,
      //   },
      //   {
      //     path: [7, 'uses'],
      //     element: options.actions.actionsUploadArtifact,
      //   },
      // ])
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
      // .addChildren([
      //   {
      //     path: [0, 'uses'],
      //     element: options.actions.actionsSetupNode,
      //   },
      //   {
      //     path: [1, 'uses'],
      //     element: options.actions.actionsDownloadArtifact,
      //   },
      // ])
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
      .addChildren([
        // {
        //   path: [0, 'uses'],
        //   element: options.actions.actionsSetupNode,
        // },
        // {
        //   path: [1, 'uses'],
        //   element: options.actions.actionsDownloadArtifact,
        // },
        // {
        //   path: [8, 'env', 'NPM_CONFIG_PROVENANCE'],
        //   element: { value: 'true' },
        // },
      ])
      .createTransformations();

    return this.configure({
      path: options.path,
      transformations: [...releaseJobVersions, ...releaseGithubJobVersions, ...releaseNpmJobVersions],
    });
  }
}
