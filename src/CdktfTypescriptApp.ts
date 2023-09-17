import { typescript } from 'projen';
import { TypeScriptAppProject } from 'projen/lib/typescript';
import { CdktfConfig, CdktfConfigOptions, Language } from './CdktfConfig';
import { CdktfTasks } from './CdktfTasks';

export interface CdktfTypeScriptAppOptions extends typescript.TypeScriptProjectOptions {
  /**
   * The CDKTF cli configuration
   */
  readonly cdktfConfig?: CdktfConfigOptions;

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
}

export class CdktTypeScriptApp extends TypeScriptAppProject {
  /**
   * The CDKTF CLI options
   */
  public readonly cdktfConfig: CdktfConfig;

  /**
   *
   */
  public readonly cdktfTasks: CdktfTasks;

  constructor(options: CdktfTypeScriptAppOptions) {
    if (!options.cdktfVersion) {
      throw new Error('Required field cdktfVersion is not specified.');
    }

    if (!options.constructsVersion) {
      throw new Error('Required field constructsVersion is not specified.');
    }

    if (options.cdktfConfig && options.cdktfConfig.language && options.cdktfConfig.language !== Language.TYPESCRIPT) {
      throw new Error('The specified language must be typescript.');
    }

    super(options);

    // Metadata
    this.addKeywords('cdktf');

    // Dependency
    this.addDeps(`cdktf@${options.cdktfVersion}`, `constructs@${options.constructsVersion}`);

    // CLI
    this.addDevDeps(`cdktf-cli@${options.cdktfVersion}`);

    // Task

    // No compile step because we do all of it in typescript directly
    this.compileTask.reset();

    this.cdktfConfig = new CdktfConfig(this, {
      app: 'npx ts-node main.ts',
      language: Language.TYPESCRIPT,
      ...options.cdktfConfig,
    });

    this.cdktfTasks = new CdktfTasks(this);
  }
}
