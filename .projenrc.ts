import { RenovatebotOptions } from 'projen';
import { JsiiProjectOptions } from 'projen/lib/cdk';
import {
  JestReporter,
  NodePackageManager,
  NpmAccess,
  TrailingComma,
  Transform,
  UpdateSnapshot,
} from 'projen/lib/javascript';
import { TypeScriptProjectOptions } from 'projen/lib/typescript';
import { JsiiProjectPatch, JsiiProjectPatchOptions } from './src/patch';

const repositoryOrg = 'gmeligio';
const repositoryPath = `${repositoryOrg}/project-gen`;
const name = `@${repositoryPath}`;
const reportsDirectory = 'test_report';
const coverageDirectory = 'coverage_report';

const metadataOptions: Pick<
  JsiiProjectOptions,
  'author' | 'authorAddress' | 'description' | 'name' | 'license' | 'repositoryUrl'
> = {
  author: 'Eligio Alejandro Mariño Garcés',
  authorAddress: '22875166+gmeligio@users.noreply.github.com',
  description: 'Project types for Projen',
  license: 'MIT',
  name,
  repositoryUrl: `https://github.com/${repositoryPath}.git`,
};

const documentationOptions: Pick<TypeScriptProjectOptions, 'sampleCode' | 'readme'> = {
  sampleCode: false,
  readme: {
    filename: 'readme.md',
  },
};

const buildOptions: Pick<
  JsiiProjectPatchOptions,
  | 'excludeTypescript'
  | 'gitignore'
  | 'minNodeVersion'
  | 'npmignore'
  | 'npmrcOptions'
  | 'jsiiVersion'
  | 'package'
  | 'packageManager'
  | 'pnpmVersion'
  | 'projenrcTs'
  | 'projenrcTsOptions'
> = {
  excludeTypescript: ['src/**/*.test.ts'],
  gitignore: [coverageDirectory, reportsDirectory, '.vscode', '.env'],
  jsiiVersion: '~5.0.0',
  minNodeVersion: '18.17.0',
  npmignore: [coverageDirectory, reportsDirectory, '.pnpm'],
  npmrcOptions: [
    {
      name: 'engine-strict',
      value: 'true',
    },
    // TODO: Remove when this issue is solved
    // https://github.com/cdklabs/publib/issues/969
    // Currently, the bundledDependencies add hard links including .pnpm folder and other folders, making the publishing the fail with error 415
    // https://github.com/gmeligio/project-gen/actions/runs/7351465607/job/20015330761
    // TODO: https://github.com/winglang/wing/pull/3187
    {
      name: 'node-linker',
      value: 'hoisted',
    },
    // {
    //   name: 'symlink',
    //   value: 'false',
    // },
    {
      name: `//registry.npmjs.org/:_authToken`,
      value: '${NPM_TOKEN}',
    },
  ],
  package: true,
  packageManager: NodePackageManager.PNPM,
  pnpmVersion: '8',
  projenrcTs: true,
  //   projenrcTsOptions: {
  //     swc: true,
  //   },
};

const projenDep = 'projen@0.78.5';
const constructDep = 'constructs@10.3.0';
const projenDevDeps = ([] as string[]).concat(projenDep, '@types/uuid', constructDep, 'publib');
const projenDeps = ['uuid', 'yaml'];

const jestDevDeps = ['@swc/jest', '@swc/core', 'jest-junit', '@types/mock-fs', 'cdktf', 'mock-fs'];

const bundledDeps = ([] as string[]).concat(projenDeps);
const devDeps = ([] as string[]).concat(projenDevDeps, jestDevDeps);
const peerDeps = ([] as string[]).concat(projenDep, 'constructs');

const renovatebotOptions: RenovatebotOptions = {
  overrideConfig: {
    customManagers: [
      {
        customType: 'regex',
        fileMatch: ['^version\\.json$'],
        matchStrings: [
          '"(?<depName>.*?)":\\s*{[^}]*}',
          '"currentDigest":\\s*"(?<currentDigest>.*)",\\s*"currentValue":\\s"(?<currentValue>.*)",\\s*"currentVersion":\\s"(?<currentVersion>.*)",\\s*"datasource":\\s*"(?<datasource>.*)",\\s*"depType":\\s*"(?<depType>.*)",\\s*"manager":\\s*".*?"',
        ],
        matchStringsStrategy: 'recursive',
        versioningTemplate: 'docker',
      },
    ],
  },
};

const dependencyOptions: Pick<TypeScriptProjectOptions, 'bundledDeps' | 'devDeps' | 'peerDeps' | 'renovatebotOptions'> =
  {
    bundledDeps,
    devDeps,
    peerDeps,
    renovatebotOptions,
  };

const releaseOptions: Pick<
  TypeScriptProjectOptions,
  'defaultReleaseBranch' | 'npmAccess' | 'publishTasks' | 'release' | 'releaseToNpm'
> = {
  defaultReleaseBranch: 'main',
  npmAccess: NpmAccess.PUBLIC,
  publishTasks: true,
  release: true,
  releaseToNpm: true,
};

const formatOptions: Pick<TypeScriptProjectOptions, 'prettier' | 'prettierOptions'> = {
  prettier: true,
  prettierOptions: {
    settings: {
      semi: true,
      singleQuote: true,
      trailingComma: TrailingComma.ES5,
      tabWidth: 2,
      printWidth: 120,
    },
    overrides: [
      {
        files: '*.json',
        options: {
          tabWidth: 4,
        },
      },
    ],
  },
};

const pipelineOptions: Pick<TypeScriptProjectOptions, 'depsUpgrade' | 'github' | 'githubOptions' | 'renovatebot'> = {
  depsUpgrade: false,
  github: true,
  githubOptions: { pullRequestLint: false },
  renovatebot: true,
};

const jestJunitReporter = new JestReporter('jest-junit', {
  outputDirectory: reportsDirectory,
  addFileAttribute: 'true',
});

type TestOptions = Pick<TypeScriptProjectOptions, 'jestOptions'>;
const testOptions: TestOptions = {
  jestOptions: {
    junitReporting: false,
    updateSnapshot: UpdateSnapshot.NEVER,
    jestConfig: {
      clearMocks: true,
      coverageProvider: 'v8',
      moduleFileExtensions: ['ts', 'js', 'json', 'node'],
      setupFilesAfterEnv: ['<rootDir>/test/setupJest.js'],
      testEnvironment: 'node',
      testMatch: ['test/**/*.test.ts'],
      testPathIgnorePatterns: ['/node_modules/', '.d.ts', '.js'],
      transform: {
        '\\.[jt]sx?$': new Transform('@swc/jest'),
      },
      reporters: [jestJunitReporter],
      coverageDirectory,
      coverageReporters: ['cobertura'],
      coverageThreshold: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
      errorOnDeprecated: true,
    },
  },
};

const project = new JsiiProjectPatch({
  ...buildOptions,
  ...dependencyOptions,
  ...documentationOptions,
  ...formatOptions,
  ...metadataOptions,
  ...pipelineOptions,
  ...releaseOptions,
  ...testOptions,
});

project.synth();
