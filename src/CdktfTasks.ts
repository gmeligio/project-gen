import { Component, Project, Task } from 'projen';

/**
 * Adds standard AWS CDK tasks to your project.
 */
export class CdktfTasks extends Component {
  /**
   * Generate CDK Constructs for Terraform providers and modules.
   */
  public readonly get: Task;

  /**
   * Synthesizes Terraform code for the given app in a directory.
   */
  public readonly synth: Task;

  /**
   * Deploy the given stacks.
   */
  public readonly deploy: Task;

  /**
   * Destroy the given stacks.
   */
  public readonly destroy: Task;

  /**
   * Perform a diff (terraform plan) for the given stack.
   */
  public readonly diff: Task;

  constructor(project: Project) {
    super(project);

    this.get = project.addTask('get', {
      description: 'Generate CDK Constructs for Terraform providers and modules.',
      exec: 'cdktf get',
    });

    this.synth = project.addTask('synth', {
      description: 'Synthesizes Terraform code for the given app in a directory.',
      exec: 'cdktf synth',
    });

    this.deploy = project.addTask('deploy', {
      description: 'Deploy the given stacks.',
      exec: 'cdktf deploy',
      receiveArgs: true,
    });

    this.destroy = project.addTask('destroy', {
      description: 'Destroy the given stacks.',
      exec: 'cdktf destroy',
      receiveArgs: true,
    });

    this.diff = project.addTask('diff', {
      description: 'Perform a diff (terraform plan) for the given stack.',
      exec: 'cdktf diff',
    });
  }
}
