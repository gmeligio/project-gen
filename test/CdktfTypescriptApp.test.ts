import { CdktfTypeScriptApp } from '../src/CdktfTypescriptApp';

describe('CdktfTypeScriptApp', () => {
  describe('appEntrypoint', () => {
    test('should use `main.ts` by default', () => {
      const app = new CdktfTypeScriptApp({
        name: 'test_project',
        defaultReleaseBranch: 'main',
        cdktfVersion: '0.0.0',
        constructsVersion: '0.0.0',
      });

      expect(app.cdktfConfig.app).toStrictEqual('npx ts-node src/main.ts');
    });

    test('can be overridden with custom file', () => {
      const appEntrypoint = 'index.ts';

      const app = new CdktfTypeScriptApp({
        name: 'test_project',
        defaultReleaseBranch: 'main',
        cdktfVersion: '0.0.0',
        constructsVersion: '0.0.0',
        appEntrypoint,
      });

      const appFile = `${app.srcdir}/${appEntrypoint}`;

      expect(app.cdktfConfig.app).toStrictEqual(`npx ts-node ${appFile}`);
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
      expect(createCdktfApp).toThrow(new Error('Required field cdktfVersion is not specified.'));
    });

    test('should throw an error if cdktfVersion is not specified', () => {
      const createCdktfApp = () =>
        // @ts-ignore
        new CdktfTypeScriptApp({
          name: 'test_project',
          defaultReleaseBranch: 'main',
          cdktfVersion: '0.0.0',
        });
      expect(createCdktfApp).toThrow(new Error('Required field constructsVersion is not specified.'));
    });
  });
});
