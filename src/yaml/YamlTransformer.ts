import * as fs from 'fs';
import * as yaml from 'yaml';
import { YamlElement } from './YamlTree';

/**
 * The options of the RenovateTransformer constructor.
 */
export interface YamlTransformerOptions {
  /**
   * The path to the file to be transformed.
   */
  readonly path: string;
}

/**
 * A transformer of YAML.
 */
export class YamlTransformer {
  private doc: yaml.Document;

  // lineWidth is a large enough value to prevent wrapping of long lines when converting the YAML document to string.
  private lineWidth = 200;

  constructor(options: YamlTransformerOptions) {
    const file = fs.readFileSync(options.path, 'utf-8');

    this.doc = yaml.parseDocument(file);
  }

  /**
   * Applies the given transformations to the document.
   * @param transformations The transformations to apply to the document.
   * @returns The transformed document as a string.
   */
  public apply(transformations: YamlElement[]): string {
    transformations.forEach((t) => {
      if (this.doc.hasIn(t.path)) {
        this.doc.setIn(t.path, t.element.value);
      } else {
        this.doc.addIn(t.path, t.element.value);
      }

      if (t.element.comment) {
        const element = this.doc.getIn(t.path, true) as any;
        element.comment = t.element.comment;
      }
    });

    return yaml.stringify(this.doc, { lineWidth: this.lineWidth });
  }
}
