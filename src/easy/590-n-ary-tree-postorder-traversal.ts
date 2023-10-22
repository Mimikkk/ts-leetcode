import { Node } from "@shared/structures";

const postorder = (root: Node | null): number[] => (root ? [...root.children.flatMap(postorder), root.val] : []);
