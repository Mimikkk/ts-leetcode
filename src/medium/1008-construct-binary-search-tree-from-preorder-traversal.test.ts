import { exercise } from "@shared/utilities/exercise.js";
import { TreeNode } from "@shared/structures/index.js";

const createNode = (val: number): TreeNode => new TreeNode(val);
const build = (node: null | TreeNode, val: number) => {
  if (!node) return createNode(val);

  if (val < node.val) {
    node.left = build(node.left, val);
  } else {
    node.right = build(node.right, val);
  }

  return node;
};

const bstFromPreorder = ([rootValue, ...values]: number[]): TreeNode | null => {
  if (rootValue === undefined) return null;

  const root = createNode(rootValue);
  values.forEach((val) => build(root, val));
  return root;
};

exercise(bstFromPreorder, [
  [[[]], null],
  [[[8, 5, 1, 7, 10, 12]], TreeNode.node([8, 5, 10, 1, 7, null, 12])],
  [[[1, 3]], TreeNode.node([1, null, 3])],
]);
