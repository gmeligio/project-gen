import * as fs from 'fs';
import { TestProject } from './TestProject';
import { CdktfConfig, Language, RequirementDefinition } from '../src/CdktfConfig';

jest.mock('fs', () => {
  return {
    // __esModule: true is important to solve error "TypeError: Cannot redefine property: existsSync"
    // https://github.com/aelbore/esbuild-jest/issues/26
    // https://stackoverflow.com/a/72885576/5405601
    __esModule: true,
    ...jest.requireActual('fs'),
  };
});

describe('CdktfConfig', () => {
  describe('cdktfVersion', () => {
    test('should throw an error if app is not specified', () => {
      const createCdktfConfig = () =>
        // @ts-ignore
        new CdktfConfig(new TestProject(), {
          language: Language.TYPESCRIPT,
        });
      expect(createCdktfConfig).toThrowError(new Error('Required option app is not specified.'));
    });

    test('should throw an error if language is not specified', () => {
      const createCdktfConfig = () =>
        // @ts-ignore
        new CdktfConfig(new TestProject(), {
          app: 'npx ts-node main.ts',
        });
      expect(createCdktfConfig).toThrowError(new Error('Required option language is not specified.'));
    });
  });

  describe('app', () => {
    test('can be overriden with custom command', () => {
      const command = 'npx ts-node --swc src/main.ts';

      const cdktfConfig = new CdktfConfig(new TestProject(), {
        app: command,
        language: Language.TYPESCRIPT,
      });

      expect(cdktfConfig.app).toStrictEqual(command);
    });
  });

  describe('projectId', () => {
    afterEach(() => {
      jest.resetModules();
      jest.clearAllMocks();
    });

    test('should be `UUID`', () => {
      const command = 'npx ts-node --swc src/main.ts';

      const cdktfConfig = new CdktfConfig(new TestProject(), {
        app: command,
        language: Language.TYPESCRIPT,
      });

      expect(cdktfConfig.projectId).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
    });

    test('should reuse existing `projectId` when `cdktf.json` exists', () => {
      const existingProjectId = '12345678-1234-1234-1234-123456789012';

      // Mock the fs.existsSync function to return true for 'cdktf.json'
      jest.spyOn(fs, 'existsSync').mockImplementation((p: fs.PathLike) => {
        // cdktf.json path has the form /tmp/random-string/cdktf.json when testing because of how projen output is created when testing
        // Then we need to check if the path contains cdktf.json
        if (p.toString().includes('cdktf.json')) {
          return true;
        }

        return false;
      });

      // Mock the fs.readFileSync function to return a JSON with the existing projectId
      jest.spyOn(fs, 'readFileSync').mockImplementation((p: fs.PathOrFileDescriptor) => {
        // cdktf.json path has the form /tmp/random-string/cdktf.json when testing because of how projen output is created when testing
        // Then we need to check if the path contains cdktf.json
        if (p.toString().includes('cdktf.json')) {
          return JSON.stringify({
            projectId: '12345678-1234-1234-1234-123456789012',
          });
        }

        return '';
      });

      const cdktfConfig = new CdktfConfig(
        new TestProject({
          outdir: '.',
        }),
        {
          app: 'npx ts-node main.ts',
          language: Language.TYPESCRIPT,
        }
      );

      expect(cdktfConfig.projectId).toStrictEqual(existingProjectId);
    });
  });

  describe('sendCrashReports', () => {
    test('should be `"false"` by default', () => {
      const cdktfConfig = new CdktfConfig(new TestProject(), {
        app: 'npx ts-node main.ts',
        language: Language.TYPESCRIPT,
      });

      expect(cdktfConfig.sendCrashReports).toStrictEqual('false');
    });

    test('can be overriden to true', () => {
      const cdktfConfig = new CdktfConfig(new TestProject(), {
        app: 'npx ts-node main.ts',
        language: Language.TYPESCRIPT,
        sendCrashReports: 'true',
      });

      expect(cdktfConfig.sendCrashReports).toStrictEqual('true');
    });
  });

  describe('terraformProviders', () => {
    test('should be empty by default', () => {
      const cdktfConfig = new CdktfConfig(new TestProject(), {
        app: 'npx ts-node main.ts',
        language: Language.TYPESCRIPT,
      });

      expect(cdktfConfig.terraformProviders).toStrictEqual([]);
    });

    test('can be defined with name, source and version', () => {
      const terraformProviders: RequirementDefinition[] = [
        {
          name: 'aws',
          source: 'hashicorp/aws',
          version: '~> 3.22',
        },
      ];

      const cdktfConfig = new CdktfConfig(new TestProject(), {
        app: 'npx ts-node main.ts',
        language: Language.TYPESCRIPT,
        terraformProviders,
      });

      expect(cdktfConfig.terraformProviders).toStrictEqual(terraformProviders);
    });

    test('can be defined with string', () => {
      const terraformProviders: RequirementDefinition[] = ['aws@~> 2.0'];

      const cdktfConfig = new CdktfConfig(new TestProject(), {
        app: 'npx ts-node main.ts',
        language: Language.TYPESCRIPT,
        terraformProviders,
      });

      expect(cdktfConfig.terraformProviders).toStrictEqual(terraformProviders);
    });

    test('can be defined with name and version', () => {
      const terraformProviders: RequirementDefinition[] = [
        {
          name: 'aws',
          version: '~> 2.0',
        },
      ];

      const cdktfConfig = new CdktfConfig(new TestProject(), {
        app: 'npx ts-node main.ts',
        language: Language.TYPESCRIPT,
        terraformProviders,
      });

      expect(cdktfConfig.terraformProviders).toStrictEqual(terraformProviders);
    });

    test('can contain objects and strings', () => {
      const terraformProviders: RequirementDefinition[] = [
        'aws@~> 2.0',
        {
          name: 'kubernetes',
          version: '~> 2.0',
        },
      ];

      const cdktfConfig = new CdktfConfig(new TestProject(), {
        app: 'npx ts-node main.ts',
        language: Language.TYPESCRIPT,
        terraformProviders,
      });

      expect(cdktfConfig.terraformProviders).toStrictEqual(terraformProviders);
    });
  });

  describe('terraformModules', () => {
    test('should be empty by default', () => {
      const cdktfConfig = new CdktfConfig(new TestProject(), {
        app: 'npx ts-node main.ts',
        language: Language.TYPESCRIPT,
      });

      expect(cdktfConfig.terraformModules).toStrictEqual([]);
    });

    test('can be defined with string', () => {
      const terraformModules: RequirementDefinition[] = ['terraform-aws-modules/vpc/aws@2.39.0'];

      const cdktfConfig = new CdktfConfig(new TestProject(), {
        app: 'npx ts-node main.ts',
        language: Language.TYPESCRIPT,
        terraformModules,
      });

      expect(cdktfConfig.terraformModules).toStrictEqual(terraformModules);
    });

    test('can be defined with name and source', () => {
      const terraformModules: RequirementDefinition[] = [
        {
          name: 'local-module',
          source: './foo',
        },
      ];

      const cdktfConfig = new CdktfConfig(new TestProject(), {
        app: 'npx ts-node main.ts',
        language: Language.TYPESCRIPT,
        terraformModules,
      });

      expect(cdktfConfig.terraformModules).toStrictEqual(terraformModules);
    });

    test('can be defined with name, source and version', () => {
      const terraformModules: RequirementDefinition[] = [
        {
          name: 'customAWSVpc',
          source: 'https://github.com/terraform-aws-modules/terraform-aws-vpc',
          version: '~> v2.0',
        },
      ];

      const cdktfConfig = new CdktfConfig(new TestProject(), {
        app: 'npx ts-node main.ts',
        language: Language.TYPESCRIPT,
        terraformModules,
      });

      expect(cdktfConfig.terraformModules).toStrictEqual(terraformModules);
    });

    test('can contain objects and strings', () => {
      const terraformModules: RequirementDefinition[] = [
        'terraform-aws-modules/vpc/aws@2.39.0',
        {
          name: 'customAWSVpc',
          source: 'https://github.com/terraform-aws-modules/terraform-aws-vpc',
          version: '~> v2.0',
        },
      ];

      const cdktfConfig = new CdktfConfig(new TestProject(), {
        app: 'npx ts-node main.ts',
        language: Language.TYPESCRIPT,
        terraformModules,
      });

      expect(cdktfConfig.terraformModules).toStrictEqual(terraformModules);
    });
  });
});
