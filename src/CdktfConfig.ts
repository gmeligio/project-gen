import * as fs from 'fs';
import * as path from 'path';
import { Component, JsonFile, Project } from 'projen';
import { v4 as uuidv4, validate } from 'uuid';

export interface TerraformDependencyConstraint {
  /**
   * Name of the module / provider
   */
  readonly name: string;

  /**
   * Namespace of the module / provider
   */
  readonly namespace?: string;

  /**
   * Fully qualified name of the module / provider
   */
  readonly fqn?: string;

  /**
   * Path / url / registry identifier for the module / provider
   */
  readonly source?: string;

  /**
   * Version constraint (https://www.terraform.io/docs/language/providers/requirements.html#version-constraints)
   */
  readonly version?: string;
}

export type RequirementDefinition = string | TerraformDependencyConstraint;

export enum Language {
  TYPESCRIPT = 'typescript',
  PYTHON = 'python',
  CSHARP = 'csharp',
  JAVA = 'java',
  GO = 'go',
}

export interface CdktfConfigCommonOptions {
  /**
   * Default: '.gen'. Path where generated provider bindings will be rendered to.
   *
   * @default ".gen"
   */
  readonly codeMakerOutput?: string;

  /**
   * Where the synthesized JSON should go. Also will be the working directory for CDKTF cli
   *
   * @default "cdktf.out"
   */
  readonly output?: string;

  /**
   * Unique identifier for the project used to differentiate projects
   *
   * @default "generated UUID"
   */
  readonly projectId?: string;

  /**
   * Whether to send crash reports to the CDKTF team
   *
   * @default "false"
   */
  readonly sendCrashReports?: string;

  /**
   * Terraform Providers to build
   */
  readonly terraformProviders?: RequirementDefinition[];

  /**
   * Terraform Modules to build
   */
  readonly terraformModules?: RequirementDefinition[];
}

/**
 * Options for CdktfConfig
 */
export interface CdktfConfigOptions extends CdktfConfigCommonOptions {
  /**
   * The command to run in order to synthesize the CDKTF application (language specific)
   */
  readonly app: string;

  /**
   * Target language for building provider or module bindings. Currently supported: `typescript`, `python`, `java`, `csharp`, and `go`
   */
  readonly language: Language;
}

export class CdktfConfig extends Component {
  /**
   * The command to run in order to synthesize the CDKTF application
   */
  public readonly json: JsonFile;

  /**
   * The command to run in order to synthesize the CDKTF application (language specific)
   */
  public readonly app: string;

  /**
   * Target language for building provider or module bindings. Currently supported: `typescript`, `python`, `java`, `csharp`, and `go`
   */
  public readonly language: Language;

  /**
   * Unique identifier for the project used to differentiate projects
   */
  public readonly projectId: string;

  /**
   * Whether to send crash reports to the CDKTF team
   */
  public readonly sendCrashReports: string;

  /**
   * Terraform Providers to build
   */
  public readonly terraformProviders: RequirementDefinition[];

  /**
   * Terraform Modules to build
   */
  public readonly terraformModules: RequirementDefinition[];

  constructor(project: Project, options: CdktfConfigOptions) {
    super(project);

    const filename = 'cdktf.json';
    const projectIdKey = 'projectId';
    const filePath = path.join(project.outdir, filename);

    let projectId = options.projectId;
    // Validate is UUID
    if (projectId !== undefined && !validate(projectId)) {
      throw new Error(`Invalid UUID: ${projectId}. CDKTF projectID should be a valid UUID v4.`);
    }

    if (projectId === undefined && fs.existsSync(filePath)) {
      const optionsFile = fs.readFileSync(filePath, 'utf8');
      const optionsObject = JSON.parse(optionsFile);

      projectId = optionsObject[projectIdKey];
    }

    this.app = options.app;
    this.language = options.language;
    this.projectId = projectId ?? uuidv4();
    this.sendCrashReports = options.sendCrashReports ?? 'false';
    this.terraformProviders = options.terraformProviders ?? [];
    this.terraformModules = options.terraformModules ?? [];

    const cdktfOptions: CdktfConfigOptions = {
      app: this.app,
      codeMakerOutput: options.codeMakerOutput,
      language: this.language,
      projectId: this.projectId,
      sendCrashReports: this.sendCrashReports,
      terraformProviders: this.terraformProviders,
      terraformModules: this.terraformModules,
      output: options.output,
    };

    this.json = new JsonFile(project, filename, {
      readonly: true,
      obj: cdktfOptions,
    });
  }
}
