/**
 * An element to apply transformations to.
 */
export interface YamlElement {
  /**
   * The YAML path to the element to be updated.
   */
  readonly path: PathSegment[];

  /**
   * The new element to set.
   */
  readonly element: Element;
}

/**
 * The schema of a Yaml element.
 */
export interface Element {
  /**
   * The new value to set.
   */
  readonly value: string;

  /**
   * An optional comment to add to the element.
   */
  readonly comment?: string;
}

// A path segment can be an string or a number in case is a list index.
type PathSegment = string | number;

/**
 * The YamlTree options
 */
export interface YamlTreeOptions {
  /**
   * The path to the element where the elements will be transformed.
   */
  readonly path: PathSegment[];
}

/**
 * The YAML tree of transformations.
 */
export class YamlTree {
  /**
   * The path segments.
   */
  private segments: PathSegment[];

  private children: YamlElement[];

  constructor(options: YamlTreeOptions) {
    // Initially there are no children in the tree.
    this.children = [];

    this.segments = options.path;
  }

  /**
   * Add an array of childre to the tree.
   * @param children The children to add.
   * @returns The tree with the children added.
   */
  addChildren(children: YamlElement[]) {
    children.forEach((child) =>
      this.children.push({ path: [...this.segments, ...child.path], element: child.element })
    );

    return this;
  }

  /**
   * Jump to a child path.
   * @param path The path to descend to.
   * @returns The current tree.
   */
  descendTo(path: PathSegment[]) {
    this.segments.push(...path);

    return this;
  }

  /**
   * Get the transformations from the tree.
   * @returns The transformations in the tree.
   */
  createTransformations() {
    return this.children;
  }
}
