import * as fs from 'fs';
import * as yaml from 'yaml';
import { VersionElement } from './VersionTree';

/**
 * The options of the RenovateTransformer constructor.
 */
interface RenovateTransformerOptions {
  /**
   * The path to the file to be transformed.
   */
  readonly path: string;
}

/**
 * A transformer of Renovate-compatible versions for GitHub workflows.
 */
export class RenovateTransformer {
  private doc: yaml.Document;

  // lineWidth is a large enough value to prevent wrapping of long lines when converting the YAML document to string.
  private lineWidth = 200;

  constructor(options: RenovateTransformerOptions) {
    const file = fs.readFileSync(options.path, 'utf-8');

    this.doc = yaml.parseDocument(file);
  }

  /**
   * Applies the given transformations to the document.
   * @param transformations The transformations to apply to the document.
   * @returns The transformed document as a string.
   */
  public apply(transformations: VersionElement[]): string {
    // versions;
    transformations.forEach((t) => {
      this.doc.setIn(t.path, t.version.value);

      if (t.version.comment) {
        const element = this.doc.getIn(t.path, true) as any;
        element.comment = t.version.comment;
      }
    });

    return yaml.stringify(this.doc, { lineWidth: this.lineWidth });
  }
}
