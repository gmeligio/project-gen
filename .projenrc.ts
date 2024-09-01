import { ReleasableCommits, RenovatebotOptions, RenovatebotScheduleInterval } from 'projen';
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
  license: 'Apache-2.0',
  name,
  repositoryUrl: `https://github.com/${repositoryPath}.git`,
};

const documentationOptions: Pick<TypeScriptProjectOptions, 'sampleCode' | 'readme'> = {
  sampleCode: false,
  readme: {
    filename: 'readme.md',
  },
};

const typescriptVersion = '~5.4.0';

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
  | 'projenrcTs'
  | 'projenrcTsOptions'
  | 'typescriptVersion'
> = {
  excludeTypescript: ['src/**/*.test.ts'],
  gitignore: [coverageDirectory, reportsDirectory, '.vscode', '.env'],
  // JSII follows TypeScript versioning schema and should always be the same major/minor as TypeScript
  jsiiVersion: typescriptVersion,
  typescriptVersion,
  minNodeVersion: '20.17.0',
  npmignore: [coverageDirectory, reportsDirectory],
  npmrcOptions: [
    {
      name: 'engine-strict',
      value: 'true',
    },
    {
      name: 'node-linker',
      value: 'hoisted',
    },
    {
      name: `//registry.npmjs.org/:_authToken`,
      value: '${NPM_TOKEN}',
    },
  ],
  package: true,
  packageManager: NodePackageManager.PNPM,
  projenrcTs: true,
  projenrcTsOptions: {
    swc: true,
  },
};

const projenDevDeps = ['@types/uuid'];
const projenDeps = ['uuid', 'yaml'];

const jestDevDeps = ['@swc/jest', '@swc/core', 'jest-junit', 'cdktf'];

const projenVersion = '^0.86.6';
const bundledDeps = ([] as string[]).concat(projenDeps);
const devDeps = ([] as string[]).concat(projenDevDeps, jestDevDeps);
const peerDeps = ([] as string[]).concat(`projen@${projenVersion}`, 'constructs@^10.3.0');

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
  scheduleInterval: [RenovatebotScheduleInterval.MONTHLY],
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
  'defaultReleaseBranch' | 'npmAccess' | 'publishTasks' | 'release' | 'releasableCommits' | 'releaseToNpm'
> = {
  defaultReleaseBranch: 'main',
  npmAccess: NpmAccess.PUBLIC,
  publishTasks: true,
  release: true,
  releasableCommits: ReleasableCommits.featuresAndFixes(),
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

const pipelineOptions: Pick<
  TypeScriptProjectOptions,
  'depsUpgrade' | 'github' | 'githubOptions' | 'renovatebot' | 'workflowNodeVersion'
> = {
  depsUpgrade: false,
  github: true,
  githubOptions: { pullRequestLint: false },
  renovatebot: true,
  workflowNodeVersion: 'lts/*',
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
