import { Component /*TextFile*/, TextFile } from 'projen';
import { RenovateTransformer, Version, VersionElement, VersionTree } from '../renovate';
// import { RenovateTransformer, Version, VersionElement, VersionTree } from './renovate';

// /**
//  * Configure Github
//  */
// function configureGithub(project: JsiiProject) {
//   // renovatebot is used to upgrade dependencies
//   project.tryRemoveFile('.github/workflows/upgrade-main.yml');

//   // const buildWorkflow = project.tryFindObjectFile('.github/workflows/build.yml');
//   // buildWorkflow?.addOverride('jobs.build.runs-on', 'ubuntu-22.04');

//   const buildWorkflowPath = '.github/workflows/build.yml';
//   const releaseWorkflowPath = '.github/workflows/release.yml';

//   const runner: Version = { value: 'ubuntu-22.04' };
//   const actions: ActionVersions = {
//     actionsCheckout: {
//       value: 'actions/checkout@3df4ab11eba7bda6032a0b82a6bb43b11571feac',
//       comment: ' v4',
//     },
//     actionsSetupNode: {
//       value: 'actions/setup-node@5e21ff4d9bc1a8cf6de233a3057d20ec6b3fb69d',
//       comment: ' v3',
//     },
//     actionsUploadArtifact: {
//       value: 'actions/upload-artifact@a8a3f3ad30e3422c9c7b888a15615d19a852ae32',
//       comment: ' v3',
//     },
//     actionsDownloadArtifact: {
//       value: 'actions/download-artifact@9bc31d5ccc31df68ecc42ccf4149144866c47d8a',
//       comment: ' v3',
//     },
//   };

//   configureGithubBuildWorkflow(project, { path: buildWorkflowPath, runner, actions });

//   configureGithubReleaseWorkflow(project, { path: releaseWorkflowPath, runner, actions });
// }

type Action = 'actionsCheckout' | 'actionsSetupNode' | 'actionsUploadArtifact' | 'actionsDownloadArtifact';

type ActionVersions = Record<Action, Version>;

interface GithubWorkflowOptions {
  /**
   * The path to the workflow file
   */
  readonly path: string;

  /**
   * The version of the runner OS
   */
  readonly runner: Version;

  /**
   * The versions of the actions
   */
  readonly actions: ActionVersions;
}

export class GithubWorkflowPatch extends Component {
  preSynthesize() {
    const upgradePath = '.github/workflows/upgrade-main.yml';
    this.project.tryRemoveFile(upgradePath);

    // const buildWorkflow = project.tryFindObjectFile('.github/workflows/build.yml');
    // buildWorkflow?.addOverride('jobs.build.runs-on', 'ubuntu-22.04');

    const runner: Version = { value: 'ubuntu-22.04' };
    const actions: ActionVersions = {
      actionsCheckout: {
        value: 'actions/checkout@3df4ab11eba7bda6032a0b82a6bb43b11571feac',
        comment: ' v4',
      },
      actionsSetupNode: {
        value: 'actions/setup-node@5e21ff4d9bc1a8cf6de233a3057d20ec6b3fb69d',
        comment: ' v3',
      },
      actionsUploadArtifact: {
        value: 'actions/upload-artifact@a8a3f3ad30e3422c9c7b888a15615d19a852ae32',
        comment: ' v3',
      },
      actionsDownloadArtifact: {
        value: 'actions/download-artifact@9bc31d5ccc31df68ecc42ccf4149144866c47d8a',
        comment: ' v3',
      },
    };

    const buildWorkflowPath = '.github/workflows/build.yml';
    const buildFile = this.configureBuild({ path: buildWorkflowPath, runner, actions });
    buildFile.synthesize();

    const releaseWorkflowPath = '.github/workflows/release.yml';
    const releaseFile = this.configureRelease({ path: releaseWorkflowPath, runner, actions });
    releaseFile.synthesize();
  }

  /**
   * Configure the GitHub workflow.
   * @param project The project to configure
   * @param options The options to configure the workflow
   */
  private configure(options: { path: string; transformations: VersionElement[] }) {
    // TODO: Convert into RenovateAwareProject to format everything inside the project
    // TODO: Or add a formatter as an Aspect of the project
    const transformer = new RenovateTransformer({ path: options.path });

    const transformed = transformer.apply(options.transformations);

    this.project.tryRemoveFile(options.path);

    const lines = transformed.split('\n');

    return new TextFile(this.project, options.path, {
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
    const buildJobTree = new VersionTree({ path: ['jobs', 'build'] });
    const buildJobVersions = buildJobTree
      .addChildren([
        {
          path: ['runs-on'],
          version: options.runner,
        },
      ])
      .descendTo(['steps'])
      .addChildren([
        {
          path: [0, 'uses'],
          version: options.actions.actionsCheckout,
        },
        {
          path: [1, 'uses'],
          version: options.actions.actionsSetupNode,
        },
        {
          path: [5, 'uses'],
          version: options.actions.actionsUploadArtifact,
        },
        {
          path: [8, 'uses'],
          version: options.actions.actionsUploadArtifact,
        },
      ])
      .createVersions();

    const selfMutationJobTree = new VersionTree({ path: ['jobs', 'self-mutation'] });
    const selfMutationJobVersions = selfMutationJobTree
      .addChildren([
        {
          path: ['runs-on'],
          version: options.runner,
        },
      ])
      .descendTo(['steps'])
      .addChildren([
        {
          path: [0, 'uses'],
          version: options.actions.actionsCheckout,
        },
        {
          path: [1, 'uses'],
          version: options.actions.actionsDownloadArtifact,
        },
      ])
      .createVersions();

    const packageJsJobTree = new VersionTree({ path: ['jobs', 'package-js'] });
    const packageJsJobVersions = packageJsJobTree
      .addChildren([
        {
          path: ['runs-on'],
          version: options.runner,
        },
      ])
      .descendTo(['steps'])
      .addChildren([
        {
          path: [0, 'uses'],
          version: options.actions.actionsSetupNode,
        },
        {
          path: [1, 'uses'],
          version: options.actions.actionsDownloadArtifact,
        },
      ])
      .createVersions();

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
    const releaseJobTree = new VersionTree({ path: ['jobs', 'release'] });
    const releaseJobVersions = releaseJobTree
      .addChildren([
        {
          path: ['runs-on'],
          version: options.runner,
        },
      ])
      .descendTo(['steps'])
      .addChildren([
        {
          path: [0, 'uses'],
          version: options.actions.actionsCheckout,
        },
        {
          path: [2, 'uses'],
          version: options.actions.actionsSetupNode,
        },
        {
          path: [7, 'uses'],
          version: options.actions.actionsUploadArtifact,
        },
      ])
      .createVersions();

    const releaseGithubJobTree = new VersionTree({ path: ['jobs', 'release_github'] });
    const releaseGithubJobVersions = releaseGithubJobTree
      .addChildren([
        {
          path: ['runs-on'],
          version: options.runner,
        },
      ])
      .descendTo(['steps'])
      .addChildren([
        {
          path: [0, 'uses'],
          version: options.actions.actionsSetupNode,
        },
        {
          path: [1, 'uses'],
          version: options.actions.actionsDownloadArtifact,
        },
      ])
      .createVersions();

    const releaseNpmJobTree = new VersionTree({ path: ['jobs', 'release_npm'] });
    const releaseNpmJobVersions = releaseNpmJobTree
      .addChildren([
        {
          path: ['runs-on'],
          version: options.runner,
        },
      ])
      .descendTo(['steps'])
      .addChildren([
        {
          path: [0, 'uses'],
          version: options.actions.actionsSetupNode,
        },
        {
          path: [1, 'uses'],
          version: options.actions.actionsDownloadArtifact,
        },
      ])
      .createVersions();

    return this.configure({
      path: options.path,
      transformations: [...releaseJobVersions, ...releaseGithubJobVersions, ...releaseNpmJobVersions],
    });
  }
}
