import { RenovatebotOptions } from 'projen';
import { JsiiProjectOptions } from 'projen/lib/cdk';
import { JestReporter, NodePackageManager, TrailingComma, Transform, UpdateSnapshot } from 'projen/lib/javascript';
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
  | 'npmrcOptions'
  | 'jsiiVersion'
  | 'package'
  | 'packageManager'
  | 'projenrcTs'
  | 'projenrcTsOptions'
> = {
  excludeTypescript: ['src/**/*.test.ts'],
  gitignore: [reportsDirectory, '.vscode', '.env'],
  jsiiVersion: '~5.0.0',
  minNodeVersion: '18.17.0',
  npmrcOptions: [
    {
      name: 'engine-strict',
      value: 'true',
    },
    {
      name: `//registry.npmjs.org/:_authToken`,
      value: '${NPM_TOKEN}',
    },
  ],
  package: true,
  packageManager: NodePackageManager.NPM,
  projenrcTs: true,
  //   projenrcTsOptions: {
  //     swc: true,
  //   },
};

const projenDevDeps = ['projen@0.72.23', 'publib', '@types/uuid'];
const projenDeps = ['uuid', 'cdktf', 'yaml'];

const jestDeps = ['mock-fs'];
const jestDevDeps = ['@swc/jest', 'jest-junit', '@types/mock-fs'];

const bundledDeps = ([] as string[]).concat(projenDeps, jestDeps);
const devDeps = ([] as string[]).concat(projenDevDeps, jestDevDeps);
const peerDeps = ([] as string[]).concat('projen');

const renovatebotOptions: RenovatebotOptions = {
  overrideConfig: {
    customManagers: [
      {
        customType: 'regex',
        fileMatch: ['^version\\.json$'],
        // matchStrings: ['"(?<datasource>.*?)":\\s*{[^}]*}', '"(?<depName>.*?)":\\s*"(?<currentDigest>.*)"'],
        matchStrings: [
          '"(?<depName>.*?)":\\s*{[^}]*}',
          '"datasource":\\s*"(?<datasource>.*)",\\s*"digest":\\s*"(?<currentDigest>.*)",\\s*"version":\\s*"(?<currentValue>.*)"',
        ],
        matchStringsStrategy: 'recursive',
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
  'defaultReleaseBranch' | 'publishTasks' | 'release' | 'releaseToNpm'
> = {
  defaultReleaseBranch: 'main',
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
      setupFilesAfterEnv: ['<rootDir>/src/setupJest.js'],
      testEnvironment: 'node',
      testMatch: ['src/**/test/*.ts'],
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
