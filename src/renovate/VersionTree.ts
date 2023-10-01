/**
 * An element to apply transformations to.
 */
export interface VersionElement {
  /**
   * The YAML path to the element to be updated.
   */
  readonly path: PathSegment[];

  /**
   * The new version to set.
   */
  readonly version: Version;
}

/**
 * The schema of a Renovate version.
 */
export interface Version {
  /**
   * The new version value to set.
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
 * The VersionCollection options
 */
export interface VersionTreeOptions {
  /**
   * The path to the element where the versions will be transformed.
   */
  readonly path: PathSegment[];
}

/**
 * A tree of versions to be updated.
 */
export class VersionTree {
  /**
   * The path segments.
   */
  private segments: PathSegment[];

  private children: VersionElement[];

  constructor(options: VersionTreeOptions) {
    // Initially there are no children in the tree.
    this.children = [];

    this.segments = options.path;
  }

  /**
   * Add an array of versions to the tree.
   * @param children The versions to add.
   * @returns The current tree.
   */
  addChildren(children: VersionElement[]) {
    children.forEach((child) =>
      this.children.push({ path: [...this.segments, ...child.path], version: child.version })
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
   * Get the versions in the tree.
   * @returns The versions in the tree.
   */
  getVersions() {
    return this.children;
  }
}
