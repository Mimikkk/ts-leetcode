import { exercise } from "@shared/utilities/exercise.js";
import { TreeNode } from "@shared/structures/index.js";

const getAllElements = (root1: TreeNode | null, root2: TreeNode | null): number[] => {
  const values: number[] = [];

  const traverse = (node: TreeNode | null) => {
    if (!node) return;
    traverse(node.left);
    values.push(node.val);
    traverse(node.right);
  };

  traverse(root1);
  traverse(root2);

  return values.sort((a, b) => a - b);
};

exercise(getAllElements, [
  [
    [TreeNode.node([2, 1, 4]), TreeNode.node([1, 0, 3])],
    [0, 1, 1, 2, 3, 4],
  ],
  [
    [TreeNode.node([1, null, 8]), TreeNode.node([8, 1])],
    [1, 1, 8, 8],
  ],
]);
