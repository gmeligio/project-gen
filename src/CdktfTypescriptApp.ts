import * as path from 'path';
import { typescript } from 'projen';
import { TypeScriptAppProject } from 'projen/lib/typescript';
import { CdktfConfig, CdktfConfigCommonOptions, Language } from './CdktfConfig';
import { CdktfTasks } from './CdktfTasks';

export interface CdktfTypeScriptAppOptions extends typescript.TypeScriptProjectOptions, CdktfConfigCommonOptions {
  /**
   * Minimum target version this app can be run against
   *
   * @default "latest"
   */
  readonly cdktfVersion: string;

  /**
   * Construct version to use
   *
   * @default "latest"
   */
  readonly constructsVersion: string;

  /**
   * The file containing the CDKTF app
   *
   * @default "main.ts"
   */
  readonly appEntrypoint?: string;
}

export class CdktfTypeScriptApp extends TypeScriptAppProject {
  /**
   * The CDKTF CLI options
   */
  public readonly cdktfConfig: CdktfConfig;

  /**
   * The tasks for this project
   */
  public readonly cdktfTasks: CdktfTasks;

  /**
   * The file containing the CDKTF app
   */
  public readonly appEntrypoint: string;

  constructor(options: CdktfTypeScriptAppOptions) {
    if (!options.cdktfVersion) {
      throw new Error('Required field cdktfVersion is not specified.');
    }

    if (!options.constructsVersion) {
      throw new Error('Required field constructsVersion is not specified.');
    }

    super(options);

    this.addKeywords('cdktf');

    this.addDeps(`cdktf@${options.cdktfVersion}`, `constructs@${options.constructsVersion}`);

    this.addDevDeps(`cdktf-cli@${options.cdktfVersion}`);

    // No compile step because we do all of it in typescript directly
    this.compileTask.reset();

    this.appEntrypoint = options.appEntrypoint ?? 'main.ts';

    const appFile = `${path.posix.join(this.srcdir, this.appEntrypoint)}`;

    this.cdktfConfig = new CdktfConfig(this, {
      app: `npx ts-node ${appFile}`,
      language: Language.TYPESCRIPT,
      ...options,
    });

    this.cdktfTasks = new CdktfTasks(this);

    this.gitignore.exclude('.gen', 'cdktf.out');
  }
}
