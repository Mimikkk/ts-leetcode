import { Node } from "@shared/structures";

const preorder = (root: Node | null): number[] =>
  root ?[root.val, ...root.children.flatMap(preorder)]:[];
