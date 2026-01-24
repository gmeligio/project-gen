# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdktfConfig <a name="CdktfConfig" id="@gmeligio/project-gen.CdktfConfig"></a>

#### Initializers <a name="Initializers" id="@gmeligio/project-gen.CdktfConfig.Initializer"></a>

```typescript
import { CdktfConfig } from '@gmeligio/project-gen'

new CdktfConfig(project: Project, options: CdktfConfigOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.Initializer.parameter.options">options</a></code> | <code><a href="#@gmeligio/project-gen.CdktfConfigOptions">CdktfConfigOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@gmeligio/project-gen.CdktfConfig.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="@gmeligio/project-gen.CdktfConfig.Initializer.parameter.options"></a>

- *Type:* <a href="#@gmeligio/project-gen.CdktfConfigOptions">CdktfConfigOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@gmeligio/project-gen.CdktfConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@gmeligio/project-gen.CdktfConfig.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@gmeligio/project-gen.CdktfConfig.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@gmeligio/project-gen.CdktfConfig.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@gmeligio/project-gen.CdktfConfig.isConstruct"></a>

```typescript
import { CdktfConfig } from '@gmeligio/project-gen'

CdktfConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@gmeligio/project-gen.CdktfConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@gmeligio/project-gen.CdktfConfig.isComponent"></a>

```typescript
import { CdktfConfig } from '@gmeligio/project-gen'

CdktfConfig.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@gmeligio/project-gen.CdktfConfig.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.property.app">app</a></code> | <code>string</code> | The command to run in order to synthesize the CDKTF application (language specific). |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.property.json">json</a></code> | <code>projen.JsonFile</code> | The command to run in order to synthesize the CDKTF application. |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.property.language">language</a></code> | <code><a href="#@gmeligio/project-gen.Language">Language</a></code> | Target language for building provider or module bindings. |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.property.projectId">projectId</a></code> | <code>string</code> | Unique identifier for the project used to differentiate projects. |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.property.sendCrashReports">sendCrashReports</a></code> | <code>string</code> | Whether to send crash reports to the CDKTF team. |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.property.terraformModules">terraformModules</a></code> | <code>string \| <a href="#@gmeligio/project-gen.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]</code> | Terraform Modules to build. |
| <code><a href="#@gmeligio/project-gen.CdktfConfig.property.terraformProviders">terraformProviders</a></code> | <code>string \| <a href="#@gmeligio/project-gen.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]</code> | Terraform Providers to build. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gmeligio/project-gen.CdktfConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@gmeligio/project-gen.CdktfConfig.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `app`<sup>Required</sup> <a name="app" id="@gmeligio/project-gen.CdktfConfig.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

The command to run in order to synthesize the CDKTF application (language specific).

---

##### `json`<sup>Required</sup> <a name="json" id="@gmeligio/project-gen.CdktfConfig.property.json"></a>

```typescript
public readonly json: JsonFile;
```

- *Type:* projen.JsonFile

The command to run in order to synthesize the CDKTF application.

---

##### `language`<sup>Required</sup> <a name="language" id="@gmeligio/project-gen.CdktfConfig.property.language"></a>

```typescript
public readonly language: Language;
```

- *Type:* <a href="#@gmeligio/project-gen.Language">Language</a>

Target language for building provider or module bindings.

Currently supported: `typescript`, `python`, `java`, `csharp`, and `go`

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@gmeligio/project-gen.CdktfConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique identifier for the project used to differentiate projects.

---

##### `sendCrashReports`<sup>Required</sup> <a name="sendCrashReports" id="@gmeligio/project-gen.CdktfConfig.property.sendCrashReports"></a>

```typescript
public readonly sendCrashReports: string;
```

- *Type:* string

Whether to send crash reports to the CDKTF team.

---

##### `terraformModules`<sup>Required</sup> <a name="terraformModules" id="@gmeligio/project-gen.CdktfConfig.property.terraformModules"></a>

```typescript
public readonly terraformModules: string | TerraformDependencyConstraint[];
```

- *Type:* string | <a href="#@gmeligio/project-gen.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]

Terraform Modules to build.

---

##### `terraformProviders`<sup>Required</sup> <a name="terraformProviders" id="@gmeligio/project-gen.CdktfConfig.property.terraformProviders"></a>

```typescript
public readonly terraformProviders: string | TerraformDependencyConstraint[];
```

- *Type:* string | <a href="#@gmeligio/project-gen.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]

Terraform Providers to build.

---


### CdktfTasks <a name="CdktfTasks" id="@gmeligio/project-gen.CdktfTasks"></a>

Adds standard AWS CDK tasks to your project.

#### Initializers <a name="Initializers" id="@gmeligio/project-gen.CdktfTasks.Initializer"></a>

```typescript
import { CdktfTasks } from '@gmeligio/project-gen'

new CdktfTasks(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.CdktfTasks.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@gmeligio/project-gen.CdktfTasks.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gmeligio/project-gen.CdktfTasks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@gmeligio/project-gen.CdktfTasks.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@gmeligio/project-gen.CdktfTasks.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@gmeligio/project-gen.CdktfTasks.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@gmeligio/project-gen.CdktfTasks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@gmeligio/project-gen.CdktfTasks.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@gmeligio/project-gen.CdktfTasks.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@gmeligio/project-gen.CdktfTasks.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gmeligio/project-gen.CdktfTasks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@gmeligio/project-gen.CdktfTasks.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@gmeligio/project-gen.CdktfTasks.isConstruct"></a>

```typescript
import { CdktfTasks } from '@gmeligio/project-gen'

CdktfTasks.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@gmeligio/project-gen.CdktfTasks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@gmeligio/project-gen.CdktfTasks.isComponent"></a>

```typescript
import { CdktfTasks } from '@gmeligio/project-gen'

CdktfTasks.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@gmeligio/project-gen.CdktfTasks.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.CdktfTasks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gmeligio/project-gen.CdktfTasks.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTasks.property.deploy">deploy</a></code> | <code>projen.Task</code> | Deploy the given stacks. |
| <code><a href="#@gmeligio/project-gen.CdktfTasks.property.destroy">destroy</a></code> | <code>projen.Task</code> | Destroy the given stacks. |
| <code><a href="#@gmeligio/project-gen.CdktfTasks.property.diff">diff</a></code> | <code>projen.Task</code> | Perform a diff (terraform plan) for the given stack. |
| <code><a href="#@gmeligio/project-gen.CdktfTasks.property.get">get</a></code> | <code>projen.Task</code> | Generate CDK Constructs for Terraform providers and modules. |
| <code><a href="#@gmeligio/project-gen.CdktfTasks.property.synth">synth</a></code> | <code>projen.Task</code> | Synthesizes Terraform code for the given app in a directory. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gmeligio/project-gen.CdktfTasks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@gmeligio/project-gen.CdktfTasks.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `deploy`<sup>Required</sup> <a name="deploy" id="@gmeligio/project-gen.CdktfTasks.property.deploy"></a>

```typescript
public readonly deploy: Task;
```

- *Type:* projen.Task

Deploy the given stacks.

---

##### `destroy`<sup>Required</sup> <a name="destroy" id="@gmeligio/project-gen.CdktfTasks.property.destroy"></a>

```typescript
public readonly destroy: Task;
```

- *Type:* projen.Task

Destroy the given stacks.

---

##### `diff`<sup>Required</sup> <a name="diff" id="@gmeligio/project-gen.CdktfTasks.property.diff"></a>

```typescript
public readonly diff: Task;
```

- *Type:* projen.Task

Perform a diff (terraform plan) for the given stack.

---

##### `get`<sup>Required</sup> <a name="get" id="@gmeligio/project-gen.CdktfTasks.property.get"></a>

```typescript
public readonly get: Task;
```

- *Type:* projen.Task

Generate CDK Constructs for Terraform providers and modules.

---

##### `synth`<sup>Required</sup> <a name="synth" id="@gmeligio/project-gen.CdktfTasks.property.synth"></a>

```typescript
public readonly synth: Task;
```

- *Type:* projen.Task

Synthesizes Terraform code for the given app in a directory.

---


### CdktfTypeScriptApp <a name="CdktfTypeScriptApp" id="@gmeligio/project-gen.CdktfTypeScriptApp"></a>

#### Initializers <a name="Initializers" id="@gmeligio/project-gen.CdktfTypeScriptApp.Initializer"></a>

```typescript
import { CdktfTypeScriptApp } from '@gmeligio/project-gen'

new CdktfTypeScriptApp(options: CdktfTypeScriptAppOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.Initializer.parameter.options">options</a></code> | <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions">CdktfTypeScriptAppOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@gmeligio/project-gen.CdktfTypeScriptApp.Initializer.parameter.options"></a>

- *Type:* <a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions">CdktfTypeScriptAppOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@gmeligio/project-gen.CdktfTypeScriptApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@gmeligio/project-gen.CdktfTypeScriptApp.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@gmeligio/project-gen.CdktfTypeScriptApp.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@gmeligio/project-gen.CdktfTypeScriptApp.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@gmeligio/project-gen.CdktfTypeScriptApp.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@gmeligio/project-gen.CdktfTypeScriptApp.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@gmeligio/project-gen.CdktfTypeScriptApp.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@gmeligio/project-gen.CdktfTypeScriptApp.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@gmeligio/project-gen.CdktfTypeScriptApp.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@gmeligio/project-gen.CdktfTypeScriptApp.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@gmeligio/project-gen.CdktfTypeScriptApp.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@gmeligio/project-gen.CdktfTypeScriptApp.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@gmeligio/project-gen.CdktfTypeScriptApp.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@gmeligio/project-gen.CdktfTypeScriptApp.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@gmeligio/project-gen.CdktfTypeScriptApp.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@gmeligio/project-gen.CdktfTypeScriptApp.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@gmeligio/project-gen.CdktfTypeScriptApp.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@gmeligio/project-gen.CdktfTypeScriptApp.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@gmeligio/project-gen.CdktfTypeScriptApp.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@gmeligio/project-gen.CdktfTypeScriptApp.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@gmeligio/project-gen.CdktfTypeScriptApp.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@gmeligio/project-gen.CdktfTypeScriptApp.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@gmeligio/project-gen.CdktfTypeScriptApp.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@gmeligio/project-gen.CdktfTypeScriptApp.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@gmeligio/project-gen.CdktfTypeScriptApp.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@gmeligio/project-gen.CdktfTypeScriptApp.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@gmeligio/project-gen.CdktfTypeScriptApp.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@gmeligio/project-gen.CdktfTypeScriptApp.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@gmeligio/project-gen.CdktfTypeScriptApp.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@gmeligio/project-gen.CdktfTypeScriptApp.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@gmeligio/project-gen.CdktfTypeScriptApp.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@gmeligio/project-gen.CdktfTypeScriptApp.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@gmeligio/project-gen.CdktfTypeScriptApp.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@gmeligio/project-gen.CdktfTypeScriptApp.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@gmeligio/project-gen.CdktfTypeScriptApp.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@gmeligio/project-gen.CdktfTypeScriptApp.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@gmeligio/project-gen.CdktfTypeScriptApp.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@gmeligio/project-gen.CdktfTypeScriptApp.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@gmeligio/project-gen.CdktfTypeScriptApp.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@gmeligio/project-gen.CdktfTypeScriptApp.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@gmeligio/project-gen.CdktfTypeScriptApp.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@gmeligio/project-gen.CdktfTypeScriptApp.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@gmeligio/project-gen.CdktfTypeScriptApp.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@gmeligio/project-gen.CdktfTypeScriptApp.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@gmeligio/project-gen.CdktfTypeScriptApp.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@gmeligio/project-gen.CdktfTypeScriptApp.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@gmeligio/project-gen.CdktfTypeScriptApp.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@gmeligio/project-gen.CdktfTypeScriptApp.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@gmeligio/project-gen.CdktfTypeScriptApp.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@gmeligio/project-gen.CdktfTypeScriptApp.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@gmeligio/project-gen.CdktfTypeScriptApp.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@gmeligio/project-gen.CdktfTypeScriptApp.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@gmeligio/project-gen.CdktfTypeScriptApp.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@gmeligio/project-gen.CdktfTypeScriptApp.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@gmeligio/project-gen.CdktfTypeScriptApp.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@gmeligio/project-gen.CdktfTypeScriptApp.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@gmeligio/project-gen.CdktfTypeScriptApp.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@gmeligio/project-gen.CdktfTypeScriptApp.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@gmeligio/project-gen.CdktfTypeScriptApp.isConstruct"></a>

```typescript
import { CdktfTypeScriptApp } from '@gmeligio/project-gen'

CdktfTypeScriptApp.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@gmeligio/project-gen.CdktfTypeScriptApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@gmeligio/project-gen.CdktfTypeScriptApp.isProject"></a>

```typescript
import { CdktfTypeScriptApp } from '@gmeligio/project-gen'

CdktfTypeScriptApp.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@gmeligio/project-gen.CdktfTypeScriptApp.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@gmeligio/project-gen.CdktfTypeScriptApp.of"></a>

```typescript
import { CdktfTypeScriptApp } from '@gmeligio/project-gen'

CdktfTypeScriptApp.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@gmeligio/project-gen.CdktfTypeScriptApp.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The file containing the CDKTF app. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.cdktfConfig">cdktfConfig</a></code> | <code><a href="#@gmeligio/project-gen.CdktfConfig">CdktfConfig</a></code> | The CDKTF CLI options. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.cdktfTasks">cdktfTasks</a></code> | <code><a href="#@gmeligio/project-gen.CdktfTasks">CdktfTasks</a></code> | The tasks for this project. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The file containing the CDKTF app.

---

##### `cdktfConfig`<sup>Required</sup> <a name="cdktfConfig" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.cdktfConfig"></a>

```typescript
public readonly cdktfConfig: CdktfConfig;
```

- *Type:* <a href="#@gmeligio/project-gen.CdktfConfig">CdktfConfig</a>

The CDKTF CLI options.

---

##### `cdktfTasks`<sup>Required</sup> <a name="cdktfTasks" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.cdktfTasks"></a>

```typescript
public readonly cdktfTasks: CdktfTasks;
```

- *Type:* <a href="#@gmeligio/project-gen.CdktfTasks">CdktfTasks</a>

The tasks for this project.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptApp.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@gmeligio/project-gen.CdktfTypeScriptApp.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdktfConfigCommonOptions <a name="CdktfConfigCommonOptions" id="@gmeligio/project-gen.CdktfConfigCommonOptions"></a>

#### Initializer <a name="Initializer" id="@gmeligio/project-gen.CdktfConfigCommonOptions.Initializer"></a>

```typescript
import { CdktfConfigCommonOptions } from '@gmeligio/project-gen'

const cdktfConfigCommonOptions: CdktfConfigCommonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.CdktfConfigCommonOptions.property.codeMakerOutput">codeMakerOutput</a></code> | <code>string</code> | Default: '.gen'. Path where generated provider bindings will be rendered to. |
| <code><a href="#@gmeligio/project-gen.CdktfConfigCommonOptions.property.output">output</a></code> | <code>string</code> | Where the synthesized JSON should go. |
| <code><a href="#@gmeligio/project-gen.CdktfConfigCommonOptions.property.projectId">projectId</a></code> | <code>string</code> | Unique identifier for the project used to differentiate projects. |
| <code><a href="#@gmeligio/project-gen.CdktfConfigCommonOptions.property.sendCrashReports">sendCrashReports</a></code> | <code>string</code> | Whether to send crash reports to the CDKTF team. |
| <code><a href="#@gmeligio/project-gen.CdktfConfigCommonOptions.property.terraformModules">terraformModules</a></code> | <code>string \| <a href="#@gmeligio/project-gen.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]</code> | Terraform Modules to build. |
| <code><a href="#@gmeligio/project-gen.CdktfConfigCommonOptions.property.terraformProviders">terraformProviders</a></code> | <code>string \| <a href="#@gmeligio/project-gen.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]</code> | Terraform Providers to build. |

---

##### `codeMakerOutput`<sup>Optional</sup> <a name="codeMakerOutput" id="@gmeligio/project-gen.CdktfConfigCommonOptions.property.codeMakerOutput"></a>

```typescript
public readonly codeMakerOutput: string;
```

- *Type:* string
- *Default:* ".gen"

Default: '.gen'. Path where generated provider bindings will be rendered to.

---

##### `output`<sup>Optional</sup> <a name="output" id="@gmeligio/project-gen.CdktfConfigCommonOptions.property.output"></a>

```typescript
public readonly output: string;
```

- *Type:* string
- *Default:* "cdktf.out"

Where the synthesized JSON should go.

Also will be the working directory for CDKTF cli

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@gmeligio/project-gen.CdktfConfigCommonOptions.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string
- *Default:* "generated UUID"

Unique identifier for the project used to differentiate projects.

---

##### `sendCrashReports`<sup>Optional</sup> <a name="sendCrashReports" id="@gmeligio/project-gen.CdktfConfigCommonOptions.property.sendCrashReports"></a>

```typescript
public readonly sendCrashReports: string;
```

- *Type:* string
- *Default:* "false"

Whether to send crash reports to the CDKTF team.

---

##### `terraformModules`<sup>Optional</sup> <a name="terraformModules" id="@gmeligio/project-gen.CdktfConfigCommonOptions.property.terraformModules"></a>

```typescript
public readonly terraformModules: string | TerraformDependencyConstraint[];
```

- *Type:* string | <a href="#@gmeligio/project-gen.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]

Terraform Modules to build.

---

##### `terraformProviders`<sup>Optional</sup> <a name="terraformProviders" id="@gmeligio/project-gen.CdktfConfigCommonOptions.property.terraformProviders"></a>

```typescript
public readonly terraformProviders: string | TerraformDependencyConstraint[];
```

- *Type:* string | <a href="#@gmeligio/project-gen.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]

Terraform Providers to build.

---

### CdktfConfigOptions <a name="CdktfConfigOptions" id="@gmeligio/project-gen.CdktfConfigOptions"></a>

Options for CdktfConfig.

#### Initializer <a name="Initializer" id="@gmeligio/project-gen.CdktfConfigOptions.Initializer"></a>

```typescript
import { CdktfConfigOptions } from '@gmeligio/project-gen'

const cdktfConfigOptions: CdktfConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.CdktfConfigOptions.property.codeMakerOutput">codeMakerOutput</a></code> | <code>string</code> | Default: '.gen'. Path where generated provider bindings will be rendered to. |
| <code><a href="#@gmeligio/project-gen.CdktfConfigOptions.property.output">output</a></code> | <code>string</code> | Where the synthesized JSON should go. |
| <code><a href="#@gmeligio/project-gen.CdktfConfigOptions.property.projectId">projectId</a></code> | <code>string</code> | Unique identifier for the project used to differentiate projects. |
| <code><a href="#@gmeligio/project-gen.CdktfConfigOptions.property.sendCrashReports">sendCrashReports</a></code> | <code>string</code> | Whether to send crash reports to the CDKTF team. |
| <code><a href="#@gmeligio/project-gen.CdktfConfigOptions.property.terraformModules">terraformModules</a></code> | <code>string \| <a href="#@gmeligio/project-gen.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]</code> | Terraform Modules to build. |
| <code><a href="#@gmeligio/project-gen.CdktfConfigOptions.property.terraformProviders">terraformProviders</a></code> | <code>string \| <a href="#@gmeligio/project-gen.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]</code> | Terraform Providers to build. |
| <code><a href="#@gmeligio/project-gen.CdktfConfigOptions.property.app">app</a></code> | <code>string</code> | The command to run in order to synthesize the CDKTF application (language specific). |
| <code><a href="#@gmeligio/project-gen.CdktfConfigOptions.property.language">language</a></code> | <code><a href="#@gmeligio/project-gen.Language">Language</a></code> | Target language for building provider or module bindings. |

---

##### `codeMakerOutput`<sup>Optional</sup> <a name="codeMakerOutput" id="@gmeligio/project-gen.CdktfConfigOptions.property.codeMakerOutput"></a>

```typescript
public readonly codeMakerOutput: string;
```

- *Type:* string
- *Default:* ".gen"

Default: '.gen'. Path where generated provider bindings will be rendered to.

---

##### `output`<sup>Optional</sup> <a name="output" id="@gmeligio/project-gen.CdktfConfigOptions.property.output"></a>

```typescript
public readonly output: string;
```

- *Type:* string
- *Default:* "cdktf.out"

Where the synthesized JSON should go.

Also will be the working directory for CDKTF cli

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@gmeligio/project-gen.CdktfConfigOptions.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string
- *Default:* "generated UUID"

Unique identifier for the project used to differentiate projects.

---

##### `sendCrashReports`<sup>Optional</sup> <a name="sendCrashReports" id="@gmeligio/project-gen.CdktfConfigOptions.property.sendCrashReports"></a>

```typescript
public readonly sendCrashReports: string;
```

- *Type:* string
- *Default:* "false"

Whether to send crash reports to the CDKTF team.

---

##### `terraformModules`<sup>Optional</sup> <a name="terraformModules" id="@gmeligio/project-gen.CdktfConfigOptions.property.terraformModules"></a>

```typescript
public readonly terraformModules: string | TerraformDependencyConstraint[];
```

- *Type:* string | <a href="#@gmeligio/project-gen.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]

Terraform Modules to build.

---

##### `terraformProviders`<sup>Optional</sup> <a name="terraformProviders" id="@gmeligio/project-gen.CdktfConfigOptions.property.terraformProviders"></a>

```typescript
public readonly terraformProviders: string | TerraformDependencyConstraint[];
```

- *Type:* string | <a href="#@gmeligio/project-gen.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]

Terraform Providers to build.

---

##### `app`<sup>Required</sup> <a name="app" id="@gmeligio/project-gen.CdktfConfigOptions.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

The command to run in order to synthesize the CDKTF application (language specific).

---

##### `language`<sup>Required</sup> <a name="language" id="@gmeligio/project-gen.CdktfConfigOptions.property.language"></a>

```typescript
public readonly language: Language;
```

- *Type:* <a href="#@gmeligio/project-gen.Language">Language</a>

Target language for building provider or module bindings.

Currently supported: `typescript`, `python`, `java`, `csharp`, and `go`

---

### CdktfTypeScriptAppOptions <a name="CdktfTypeScriptAppOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions"></a>

#### Initializer <a name="Initializer" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.Initializer"></a>

```typescript
import { CdktfTypeScriptAppOptions } from '@gmeligio/project-gen'

const cdktfTypeScriptAppOptions: CdktfTypeScriptAppOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projectTree">projectTree</a></code> | <code>boolean</code> | Generate a project tree file (`.projen/tree.json`) that shows all components and their relationships. Useful for understanding your project structure and debugging. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmTrustedPublishing">npmTrustedPublishing</a></code> | <code>boolean</code> | Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseEnvironment">releaseEnvironment</a></code> | <code>string</code> | The GitHub Actions environment used for the release. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseWorkflowEnv">releaseWorkflowEnv</a></code> | <code>{[ key: string ]: string}</code> | Build environment variables for release workflows. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.auditDeps">auditDeps</a></code> | <code>boolean</code> | Run security audit on dependencies. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.auditDepsOptions">auditDepsOptions</a></code> | <code>projen.javascript.AuditOptions</code> | Security audit options. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configured). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.biome">biome</a></code> | <code>boolean</code> | Setup Biome. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.biomeOptions">biomeOptions</a></code> | <code>projen.javascript.BiomeOptions</code> | Biome options. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.codeMakerOutput">codeMakerOutput</a></code> | <code>string</code> | Default: '.gen'. Path where generated provider bindings will be rendered to. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.output">output</a></code> | <code>string</code> | Where the synthesized JSON should go. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projectId">projectId</a></code> | <code>string</code> | Unique identifier for the project used to differentiate projects. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.sendCrashReports">sendCrashReports</a></code> | <code>string</code> | Whether to send crash reports to the CDKTF team. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.terraformModules">terraformModules</a></code> | <code>string \| <a href="#@gmeligio/project-gen.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]</code> | Terraform Modules to build. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.terraformProviders">terraformProviders</a></code> | <code>string \| <a href="#@gmeligio/project-gen.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]</code> | Terraform Providers to build. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.cdktfVersion">cdktfVersion</a></code> | <code>string</code> | Minimum target version this app can be run against. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Construct version to use. |
| <code><a href="#@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The file containing the CDKTF app. |

---

##### `name`<sup>Required</sup> <a name="name" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projectTree`<sup>Optional</sup> <a name="projectTree" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projectTree"></a>

```typescript
public readonly projectTree: boolean;
```

- *Type:* boolean
- *Default:* false

Generate a project tree file (`.projen/tree.json`) that shows all components and their relationships. Useful for understanding your project structure and debugging.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package. Most projects should not use this option.

The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function. Most projects should not use this option.

The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `npmTrustedPublishing`<sup>Optional</sup> <a name="npmTrustedPublishing" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmTrustedPublishing"></a>

```typescript
public readonly npmTrustedPublishing: boolean;
```

- *Type:* boolean
- *Default:* false

Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.
- `$SUGGESTED_BUMP`: the suggested bump action based on commits. One of `major|minor|patch|none`.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### `releaseEnvironment`<sup>Optional</sup> <a name="releaseEnvironment" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseEnvironment"></a>

```typescript
public readonly releaseEnvironment: string;
```

- *Type:* string
- *Default:* no environment used, unless set at the artifact level

The GitHub Actions environment used for the release.

This can be used to add an explicit approval step to the release
or limit who can initiate a release through environment protection rules.

When multiple artifacts are released, the environment can be overwritten
on a per artifact basis.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowEnv`<sup>Optional</sup> <a name="releaseWorkflowEnv" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseWorkflowEnv"></a>

```typescript
public readonly releaseWorkflowEnv: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Build environment variables for release workflows.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `auditDeps`<sup>Optional</sup> <a name="auditDeps" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.auditDeps"></a>

```typescript
public readonly auditDeps: boolean;
```

- *Type:* boolean
- *Default:* false

Run security audit on dependencies.

When enabled, creates an "audit" task that checks for known security vulnerabilities
in dependencies. By default, runs during every build and checks for "high" severity
vulnerabilities or above in all dependencies (including dev dependencies).

---

##### `auditDepsOptions`<sup>Optional</sup> <a name="auditDepsOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.auditDepsOptions"></a>

```typescript
public readonly auditDepsOptions: AuditOptions;
```

- *Type:* projen.javascript.AuditOptions
- *Default:* default options

Security audit options.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configured).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.biome"></a>

```typescript
public readonly biome: boolean;
```

- *Type:* boolean
- *Default:* false

Setup Biome.

---

##### `biomeOptions`<sup>Optional</sup> <a name="biomeOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.biomeOptions"></a>

```typescript
public readonly biomeOptions: BiomeOptions;
```

- *Type:* projen.javascript.BiomeOptions
- *Default:* default options

Biome options.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* OIDC auth is used

Define the secret name for a specified https://codecov.io/ token.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* `true` for root projects, `false` for subprojects

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* default GitHub Actions user

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true, unless biome is enabled

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `codeMakerOutput`<sup>Optional</sup> <a name="codeMakerOutput" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.codeMakerOutput"></a>

```typescript
public readonly codeMakerOutput: string;
```

- *Type:* string
- *Default:* ".gen"

Default: '.gen'. Path where generated provider bindings will be rendered to.

---

##### `output`<sup>Optional</sup> <a name="output" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.output"></a>

```typescript
public readonly output: string;
```

- *Type:* string
- *Default:* "cdktf.out"

Where the synthesized JSON should go.

Also will be the working directory for CDKTF cli

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string
- *Default:* "generated UUID"

Unique identifier for the project used to differentiate projects.

---

##### `sendCrashReports`<sup>Optional</sup> <a name="sendCrashReports" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.sendCrashReports"></a>

```typescript
public readonly sendCrashReports: string;
```

- *Type:* string
- *Default:* "false"

Whether to send crash reports to the CDKTF team.

---

##### `terraformModules`<sup>Optional</sup> <a name="terraformModules" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.terraformModules"></a>

```typescript
public readonly terraformModules: string | TerraformDependencyConstraint[];
```

- *Type:* string | <a href="#@gmeligio/project-gen.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]

Terraform Modules to build.

---

##### `terraformProviders`<sup>Optional</sup> <a name="terraformProviders" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.terraformProviders"></a>

```typescript
public readonly terraformProviders: string | TerraformDependencyConstraint[];
```

- *Type:* string | <a href="#@gmeligio/project-gen.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]

Terraform Providers to build.

---

##### `cdktfVersion`<sup>Required</sup> <a name="cdktfVersion" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.cdktfVersion"></a>

```typescript
public readonly cdktfVersion: string;
```

- *Type:* string
- *Default:* "latest"

Minimum target version this app can be run against.

---

##### `constructsVersion`<sup>Required</sup> <a name="constructsVersion" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* "latest"

Construct version to use.

---

##### `appEntrypoint`<sup>Optional</sup> <a name="appEntrypoint" id="@gmeligio/project-gen.CdktfTypeScriptAppOptions.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string
- *Default:* "main.ts"

The file containing the CDKTF app.

---

### Element <a name="Element" id="@gmeligio/project-gen.Element"></a>

The schema of a Yaml element.

#### Initializer <a name="Initializer" id="@gmeligio/project-gen.Element.Initializer"></a>

```typescript
import { Element } from '@gmeligio/project-gen'

const element: Element = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.Element.property.value">value</a></code> | <code>string</code> | The new value to set. |
| <code><a href="#@gmeligio/project-gen.Element.property.comment">comment</a></code> | <code>string</code> | An optional comment to add to the element. |

---

##### `value`<sup>Required</sup> <a name="value" id="@gmeligio/project-gen.Element.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The new value to set.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@gmeligio/project-gen.Element.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

An optional comment to add to the element.

---

### TerraformDependencyConstraint <a name="TerraformDependencyConstraint" id="@gmeligio/project-gen.TerraformDependencyConstraint"></a>

#### Initializer <a name="Initializer" id="@gmeligio/project-gen.TerraformDependencyConstraint.Initializer"></a>

```typescript
import { TerraformDependencyConstraint } from '@gmeligio/project-gen'

const terraformDependencyConstraint: TerraformDependencyConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.TerraformDependencyConstraint.property.name">name</a></code> | <code>string</code> | Name of the module / provider. |
| <code><a href="#@gmeligio/project-gen.TerraformDependencyConstraint.property.fqn">fqn</a></code> | <code>string</code> | Fully qualified name of the module / provider. |
| <code><a href="#@gmeligio/project-gen.TerraformDependencyConstraint.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the module / provider. |
| <code><a href="#@gmeligio/project-gen.TerraformDependencyConstraint.property.source">source</a></code> | <code>string</code> | Path / url / registry identifier for the module / provider. |
| <code><a href="#@gmeligio/project-gen.TerraformDependencyConstraint.property.version">version</a></code> | <code>string</code> | Version constraint (https://www.terraform.io/docs/language/providers/requirements.html#version-constraints). |

---

##### `name`<sup>Required</sup> <a name="name" id="@gmeligio/project-gen.TerraformDependencyConstraint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the module / provider.

---

##### `fqn`<sup>Optional</sup> <a name="fqn" id="@gmeligio/project-gen.TerraformDependencyConstraint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

Fully qualified name of the module / provider.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@gmeligio/project-gen.TerraformDependencyConstraint.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the module / provider.

---

##### `source`<sup>Optional</sup> <a name="source" id="@gmeligio/project-gen.TerraformDependencyConstraint.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Path / url / registry identifier for the module / provider.

---

##### `version`<sup>Optional</sup> <a name="version" id="@gmeligio/project-gen.TerraformDependencyConstraint.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version constraint (https://www.terraform.io/docs/language/providers/requirements.html#version-constraints).

---

### YamlElement <a name="YamlElement" id="@gmeligio/project-gen.YamlElement"></a>

An element to apply transformations to.

#### Initializer <a name="Initializer" id="@gmeligio/project-gen.YamlElement.Initializer"></a>

```typescript
import { YamlElement } from '@gmeligio/project-gen'

const yamlElement: YamlElement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.YamlElement.property.element">element</a></code> | <code><a href="#@gmeligio/project-gen.Element">Element</a></code> | The new element to set. |
| <code><a href="#@gmeligio/project-gen.YamlElement.property.path">path</a></code> | <code>string \| number[]</code> | The YAML path to the element to be updated. |

---

##### `element`<sup>Required</sup> <a name="element" id="@gmeligio/project-gen.YamlElement.property.element"></a>

```typescript
public readonly element: Element;
```

- *Type:* <a href="#@gmeligio/project-gen.Element">Element</a>

The new element to set.

---

##### `path`<sup>Required</sup> <a name="path" id="@gmeligio/project-gen.YamlElement.property.path"></a>

```typescript
public readonly path: string | number[];
```

- *Type:* string | number[]

The YAML path to the element to be updated.

---

### YamlTransformerOptions <a name="YamlTransformerOptions" id="@gmeligio/project-gen.YamlTransformerOptions"></a>

The options of the RenovateTransformer constructor.

#### Initializer <a name="Initializer" id="@gmeligio/project-gen.YamlTransformerOptions.Initializer"></a>

```typescript
import { YamlTransformerOptions } from '@gmeligio/project-gen'

const yamlTransformerOptions: YamlTransformerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.YamlTransformerOptions.property.path">path</a></code> | <code>string</code> | The path to the file to be transformed. |

---

##### `path`<sup>Required</sup> <a name="path" id="@gmeligio/project-gen.YamlTransformerOptions.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to the file to be transformed.

---

### YamlTreeOptions <a name="YamlTreeOptions" id="@gmeligio/project-gen.YamlTreeOptions"></a>

The YamlTree options.

#### Initializer <a name="Initializer" id="@gmeligio/project-gen.YamlTreeOptions.Initializer"></a>

```typescript
import { YamlTreeOptions } from '@gmeligio/project-gen'

const yamlTreeOptions: YamlTreeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.YamlTreeOptions.property.path">path</a></code> | <code>string \| number[]</code> | The path to the element where the elements will be transformed. |

---

##### `path`<sup>Required</sup> <a name="path" id="@gmeligio/project-gen.YamlTreeOptions.property.path"></a>

```typescript
public readonly path: string | number[];
```

- *Type:* string | number[]

The path to the element where the elements will be transformed.

---

## Classes <a name="Classes" id="Classes"></a>

### YamlTransformer <a name="YamlTransformer" id="@gmeligio/project-gen.YamlTransformer"></a>

A transformer of YAML.

#### Initializers <a name="Initializers" id="@gmeligio/project-gen.YamlTransformer.Initializer"></a>

```typescript
import { YamlTransformer } from '@gmeligio/project-gen'

new YamlTransformer(options: YamlTransformerOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.YamlTransformer.Initializer.parameter.options">options</a></code> | <code><a href="#@gmeligio/project-gen.YamlTransformerOptions">YamlTransformerOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@gmeligio/project-gen.YamlTransformer.Initializer.parameter.options"></a>

- *Type:* <a href="#@gmeligio/project-gen.YamlTransformerOptions">YamlTransformerOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gmeligio/project-gen.YamlTransformer.apply">apply</a></code> | Applies the given transformations to the document. |

---

##### `apply` <a name="apply" id="@gmeligio/project-gen.YamlTransformer.apply"></a>

```typescript
public apply(transformations: YamlElement[]): string
```

Applies the given transformations to the document.

###### `transformations`<sup>Required</sup> <a name="transformations" id="@gmeligio/project-gen.YamlTransformer.apply.parameter.transformations"></a>

- *Type:* <a href="#@gmeligio/project-gen.YamlElement">YamlElement</a>[]

The transformations to apply to the document.

---




### YamlTree <a name="YamlTree" id="@gmeligio/project-gen.YamlTree"></a>

The YAML tree of transformations.

#### Initializers <a name="Initializers" id="@gmeligio/project-gen.YamlTree.Initializer"></a>

```typescript
import { YamlTree } from '@gmeligio/project-gen'

new YamlTree(options: YamlTreeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gmeligio/project-gen.YamlTree.Initializer.parameter.options">options</a></code> | <code><a href="#@gmeligio/project-gen.YamlTreeOptions">YamlTreeOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@gmeligio/project-gen.YamlTree.Initializer.parameter.options"></a>

- *Type:* <a href="#@gmeligio/project-gen.YamlTreeOptions">YamlTreeOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gmeligio/project-gen.YamlTree.addChildren">addChildren</a></code> | Add an array of childre to the tree. |
| <code><a href="#@gmeligio/project-gen.YamlTree.createTransformations">createTransformations</a></code> | Get the transformations from the tree. |
| <code><a href="#@gmeligio/project-gen.YamlTree.descendTo">descendTo</a></code> | Jump to a child path. |

---

##### `addChildren` <a name="addChildren" id="@gmeligio/project-gen.YamlTree.addChildren"></a>

```typescript
public addChildren(children: YamlElement[]): YamlTree
```

Add an array of childre to the tree.

###### `children`<sup>Required</sup> <a name="children" id="@gmeligio/project-gen.YamlTree.addChildren.parameter.children"></a>

- *Type:* <a href="#@gmeligio/project-gen.YamlElement">YamlElement</a>[]

The children to add.

---

##### `createTransformations` <a name="createTransformations" id="@gmeligio/project-gen.YamlTree.createTransformations"></a>

```typescript
public createTransformations(): YamlElement[]
```

Get the transformations from the tree.

##### `descendTo` <a name="descendTo" id="@gmeligio/project-gen.YamlTree.descendTo"></a>

```typescript
public descendTo(path: string | number[]): YamlTree
```

Jump to a child path.

###### `path`<sup>Required</sup> <a name="path" id="@gmeligio/project-gen.YamlTree.descendTo.parameter.path"></a>

- *Type:* string | number[]

The path to descend to.

---





## Enums <a name="Enums" id="Enums"></a>

### Language <a name="Language" id="@gmeligio/project-gen.Language"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gmeligio/project-gen.Language.TYPESCRIPT">TYPESCRIPT</a></code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.Language.PYTHON">PYTHON</a></code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.Language.CSHARP">CSHARP</a></code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.Language.JAVA">JAVA</a></code> | *No description.* |
| <code><a href="#@gmeligio/project-gen.Language.GO">GO</a></code> | *No description.* |

---

##### `TYPESCRIPT` <a name="TYPESCRIPT" id="@gmeligio/project-gen.Language.TYPESCRIPT"></a>

---


##### `PYTHON` <a name="PYTHON" id="@gmeligio/project-gen.Language.PYTHON"></a>

---


##### `CSHARP` <a name="CSHARP" id="@gmeligio/project-gen.Language.CSHARP"></a>

---


##### `JAVA` <a name="JAVA" id="@gmeligio/project-gen.Language.JAVA"></a>

---


##### `GO` <a name="GO" id="@gmeligio/project-gen.Language.GO"></a>

---

