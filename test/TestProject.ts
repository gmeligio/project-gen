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
      // Disable license because it tries to load a text file, then we need to mock the fs package when it interacts with that license text file
      // This interaction will happen wherever TestProject is used
      // Then it's better to disable license and avoid all the mocking boilerplate
      licensed: false,
      ...options,
    });
  }
}
