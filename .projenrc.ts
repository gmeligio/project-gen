import { JsiiProject, JsiiProjectOptions } from 'projen/lib/cdk';
import { JestReporter, NodePackageManager, TrailingComma, Transform, UpdateSnapshot } from 'projen/lib/javascript';
import { ReleaseTrigger } from 'projen/lib/release';
import { TypeScriptProjectOptions } from 'projen/lib/typescript';

/**
 * Configure the .gitignore file
 */
function configureGitignore(project: JsiiProject, ignorePatterns: string[]) {
  ignorePatterns.forEach((ignorePattern) => project.addGitIgnore(ignorePattern));
}

const repositoryOrg = 'gmeligio';
const repositoryPath = `${repositoryOrg}/project-gen`;
const name = `@${repositoryPath}`;

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
  JsiiProjectOptions,
  'packageManager' | 'jsiiVersion' | 'package' | 'projenrcTs' | 'projenrcTsOptions'
> = {
  jsiiVersion: '~5.0.0',
  package: false,
  packageManager: NodePackageManager.NPM,
  projenrcTs: true,
  //   projenrcTsOptions: {
  //     swc: true,
  //   },
};

const projenDevDeps = ['publib', '@types/uuid'];
const projenDeps = ['uuid', 'cdktf'];

const jestDeps = ['mock-fs'];
const jestDevDeps = ['@swc/jest', 'jest-junit', '@types/mock-fs'];

const bundledDeps = ([] as string[]).concat(projenDeps, jestDeps);
const devDeps = ([] as string[]).concat(projenDevDeps, jestDevDeps);
const peerDeps = ([] as string[]).concat('projen');

const dependencyOptions: Pick<TypeScriptProjectOptions, 'devDeps' | 'peerDeps' | 'bundledDeps'> = {
  bundledDeps,
  devDeps,
  peerDeps,
};

const releaseOptions: Pick<
  TypeScriptProjectOptions,
  | 'defaultReleaseBranch'
  | 'npmRegistryUrl'
  | 'publishTasks'
  | 'release'
  | 'releaseToNpm'
  | 'releaseTrigger'
  | 'versionrcOptions'
> = {
  defaultReleaseBranch: 'main',
  publishTasks: true,
  release: true,
  releaseToNpm: true,
  releaseTrigger: ReleaseTrigger.manual(),
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

const pipelineOptions: Pick<TypeScriptProjectOptions, 'github'> = {
  github: false,
};

const reportsDirectory = 'test_report';
const coverageDirectory = 'coverage_report';

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

const project = new JsiiProject({
  ...buildOptions,
  ...dependencyOptions,
  ...documentationOptions,
  ...formatOptions,
  ...metadataOptions,
  ...pipelineOptions,
  ...releaseOptions,
  ...testOptions,
});

configureGitignore(project, [reportsDirectory]);

project.synth();
