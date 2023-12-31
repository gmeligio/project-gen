import * as path from 'path';
import mockfs from 'mock-fs';
import { TestProject } from './TestProject';
import { CdktfConfig, Language, RequirementDefinition } from '../src/CdktfConfig';

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
      mockfs.restore();
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
      const licenseRelativePath = 'license-text/Apache-2.0.txt';
      // Resolve dynamically the path to the license file because of how the PNPM package manager stores the packages.
      // The package folders are not actually in `node_modules`.
      // They are symlinked from node_modules to .pnpm folder and use the format `.pnpm/<package>@<version>/node_modules`.
      // Then the projen path need to be resolved independently from the version installed.
      const projenPath = path.dirname(require.resolve('projen/package.json'));
      const licenseFilePath = path.join(projenPath, licenseRelativePath);

      mockfs({
        // projen tries to load a license file that needs to be present
        // 'node_modules/.pnpm/projen@0.72.23/node_modules/projen/license-text/Apache-2.0.txt': mockfs.load(
        //   path.resolve(__dirname, '../../node_modules/projen/license-text/Apache-2.0.txt')
        // ),
        [licenseFilePath]: mockfs.load(path.resolve(__dirname, `../node_modules/projen/${licenseRelativePath}`)),
        'cdktf.json': mockfs.load(path.resolve(__dirname, 'cdktf.fixture.json')),
      });

      const projectId = '12345678-1234-1234-1234-123456789012';

      const cdktfConfig = new CdktfConfig(
        new TestProject({
          outdir: '.',
        }),
        {
          app: 'npx ts-node main.ts',
          language: Language.TYPESCRIPT,
        }
      );

      expect(cdktfConfig.projectId).toStrictEqual(projectId);

      mockfs.restore();
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
