import { Node } from "@shared/structures/Node.ts";

const preorder = (root: Node | null): number[] => (root ? [root.val, ...root.children.flatMap(preorder)] : []);
