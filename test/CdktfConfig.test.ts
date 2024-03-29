import * as fs from 'fs';
import { NodeProject } from 'projen/lib/javascript';
import { Testing } from 'projen/lib/testing';
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
  test('generate cdktf.json following schema', () => {
    // Save snapshot in this tests that has a fixed projectId because snapshot should be deterministic and projectId is randomly generated when it doesnt
    const project = new NodeProject({
      name: 'test_project',
      defaultReleaseBranch: 'main',
    });

    new CdktfConfig(project, {
      app: 'npx ts-node main.ts',
      language: Language.TYPESCRIPT,
      projectId: 'c9e8d26b-bb1c-4788-a36a-2cdbc5d07833',
    });

    const snapshot = Testing.synth(project);

    expect(snapshot['cdktf.json']).toMatchSnapshot();
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

    test('should throw error for invalid UUID', () => {
      const invalidUUID = 'invalidUUID';
      expect(() => {
        new CdktfConfig(new TestProject(), {
          app: 'npx ts-node main.ts',
          language: Language.TYPESCRIPT,
          projectId: invalidUUID,
        });
      }).toThrow(`Invalid UUID: ${invalidUUID}. CDKTF projectID should be a valid UUID v4.`);
    });

    test('should have UUID format', () => {
      const command = 'npx ts-node --swc src/main.ts';

      const cdktfConfig = new CdktfConfig(new TestProject(), {
        app: command,
        language: Language.TYPESCRIPT,
      });

      expect(cdktfConfig.projectId).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
    });

    test('should use provided projectId if it is valid UUID', () => {
      const projectId = 'c9e8d26b-bb1c-4788-a36a-2cdbc5d07833';
      const cdktfConfig = new CdktfConfig(new TestProject(), {
        app: 'npx ts-node main.ts',
        language: Language.TYPESCRIPT,
        projectId: projectId,
      });

      expect(cdktfConfig.projectId).toStrictEqual(projectId);
    });

    test('should reuse existing `projectId` when `cdktf.json` exists', () => {
      const existingProjectId = 'c9e8d26b-bb1c-4788-a36a-2cdbc5d07833';

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
            projectId: existingProjectId,
          });
        }

        return '';
      });

      const project = new TestProject({
        outdir: '.',
      });

      const cdktfConfig = new CdktfConfig(project, {
        app: 'npx ts-node main.ts',
        language: Language.TYPESCRIPT,
      });
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
