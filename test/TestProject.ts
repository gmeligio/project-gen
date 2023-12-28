// import * as fs from 'fs';
// import path from 'path';
// import { Task } from 'projen';
import { NodeProject, NodeProjectOptions } from 'projen/lib/javascript';

export class TestProject extends NodeProject {
  constructor(options: Omit<NodeProjectOptions, 'name' | 'defaultReleaseBranch'> = {}) {
    super({
      name: 'my-project',
      defaultReleaseBranch: 'my-branch',
      clobber: false,
      ...options,
    });
  }
}
