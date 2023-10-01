import { JsiiProject, JsiiProjectOptions } from 'projen/lib/cdk';
import { GithubWorkflowPatch } from './GithubWorkflowPatch';

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

export class JsiiProjectPatch extends JsiiProject {
  constructor(options: JsiiProjectPatchOptions) {
    super(options);

    // Create .npmrc that is not being created by default by projen.
    options.npmrcOptions.forEach((o) => this.npmrc.addConfig(o.name, o.value));

    // Update Github Workflow for custom configuration and best practices.
    new GithubWorkflowPatch(this);
  }
}
