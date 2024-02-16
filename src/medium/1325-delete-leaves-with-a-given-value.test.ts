import { exercise } from "@shared/utilities/exercise.js";
import { TreeNode } from "@shared/structures/index.js";

const removeLeafNodes = (root: TreeNode | null, target: number): TreeNode | null => {
  if (!root) return null;

  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);

  if (root.val === target && !root.left && !root.right) return null;

  return root;
};

exercise(
  (tree: [number, ...(null | number)[]], target: number) =>
    TreeNode.array(removeLeafNodes(TreeNode.node(tree), target)),
  [
    [
      [[1, 2, 3, 2, null, 2, 4], 2],
      [1, null, 3, null, 4],
    ],
    [
      [[1, 3, 3, 3, 2], 3],
      [1, 3, null, null, 2],
    ],
  ],
);
