import { Nullable } from "../utilities";

export class Node {
  val: number;
  children: Node[];

  constructor(val: number, children?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children || [];
  }
}

interface RA<T> extends Array<T | RA<T>> {}
type Descriptor = [number, ...Descriptor[]];

export module Node {
  export const node = ([value, ...children]: Descriptor): Node => new Node(value, children.map(node));

  export const array = (root?: Nullable<Node>): Descriptor => {
    if (!root) return [null] as any;
    return [root.val, ...root.children.map(array)];
  };

  export const preorder = (root: Nullable<Node>): number[] =>
    root ? [root.val, ...root.children.flatMap(Node.preorder)] : [];

  export const postorder = (root: Nullable<Node>): number[] =>
    root ? [...root.children.flatMap(Node.postorder), root.val] : [];
}
