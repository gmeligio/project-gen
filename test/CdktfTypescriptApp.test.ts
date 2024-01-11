import { Language } from '../src/CdktfConfig';
import { CdktfTypeScriptApp } from '../src/CdktfTypescriptApp';

describe('CdktfTypeScriptApp', () => {
  describe('cdktfAppFile', () => {
    test('should use `main.ts` by default', () => {
      const app = new CdktfTypeScriptApp({
        name: 'test_project',
        defaultReleaseBranch: 'main',
        cdktfVersion: '0.0.0',
        constructsVersion: '0.0.0',
      });

      expect(app.cdktfConfig.app).toStrictEqual('npx ts-node main.ts');
    });

    test('can be overridden with custom file', () => {
      const appFile = 'src/main.ts';

      const app = new CdktfTypeScriptApp({
        name: 'test_project',
        defaultReleaseBranch: 'main',
        cdktfVersion: '0.0.0',
        constructsVersion: '0.0.0',
        cdktfAppFile: appFile,
      });

      expect(app.cdktfConfig.app).toStrictEqual(`npx ts-node ${appFile}`);
    });
  });

  describe('app', () => {
    test('should use `ts-node` by default', () => {
      const app = new CdktfTypeScriptApp({
        name: 'test_project',
        defaultReleaseBranch: 'main',
        cdktfVersion: '0.0.0',
        constructsVersion: '0.0.0',
      });

      expect(app.cdktfConfig.app).toStrictEqual('npx ts-node main.ts');
    });

    test('can be overriden with custom command', () => {
      const command = 'npx ts-node --swc src/main.ts';

      const app = new CdktfTypeScriptApp({
        name: 'test_project',
        defaultReleaseBranch: 'main',
        cdktfVersion: '0.0.0',
        constructsVersion: '0.0.0',
        cdktfConfig: {
          app: command,
        },
      });

      expect(app.cdktfConfig.app).toStrictEqual(command);
    });
  });

  describe('language', () => {
    test('should use `typescript` language', () => {
      const app = new CdktfTypeScriptApp({
        name: 'test_project',
        defaultReleaseBranch: 'main',
        cdktfVersion: '0.0.0',
        constructsVersion: '0.0.0',
      });

      expect(app.cdktfConfig.language).toStrictEqual('typescript');
    });

    test('should throw if not using `typescript`', () => {
      const createCdktfApp = () =>
        new CdktfTypeScriptApp({
          name: 'test_project',
          defaultReleaseBranch: 'main',
          cdktfVersion: '0.0.0',
          constructsVersion: '0.0.0',
          cdktfConfig: {
            language: Language.GO,
          },
        });

      expect(createCdktfApp).toThrowError(
        'TypeScript is the only supported language at this moment. The specified language must be Language.TYPESCRIPT.'
      );
    });
  });

  describe('cdktfVersion', () => {
    test('should throw an error if cdktfVersion is not specified', () => {
      const createCdktfApp = () =>
        // @ts-ignore
        new CdktfTypeScriptApp({
          name: 'test_project',
          defaultReleaseBranch: 'main',
          constructsVersion: '0.0.0',
        });
      expect(createCdktfApp).toThrowError(new Error('Required field cdktfVersion is not specified.'));
    });

    test('should throw an error if cdktfVersion is not specified', () => {
      const createCdktfApp = () =>
        // @ts-ignore
        new CdktfTypeScriptApp({
          name: 'test_project',
          defaultReleaseBranch: 'main',
          cdktfVersion: '0.0.0',
        });
      expect(createCdktfApp).toThrowError(new Error('Required field constructsVersion is not specified.'));
    });
  });
});
