import { Node } from "@shared/structures/Node.js";

const postorder = (root: Node | null): number[] => (root ? [...root.children.flatMap(postorder), root.val] : []);
