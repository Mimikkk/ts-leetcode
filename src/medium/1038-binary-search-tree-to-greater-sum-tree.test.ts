import { exercise } from "@shared/utilities/exercise.ts";
import { TreeNode } from "@shared/structures/index.ts";

const traversePostorder = function* (root: TreeNode | null): Generator<TreeNode> {
  if (!root) return;
  yield* traversePostorder(root.left);
  yield* traversePostorder(root.right);
  yield root;
};

const bstToGst = (root: TreeNode | null): TreeNode | null => {
  [...traversePostorder(root)]
    .map((node, _, path) => [node, path.filter((n) => n.val >= node.val).reduce((a, { val }) => a + val, 0)] as const)
    .forEach(([node, sum]) => (node.val = sum));

  return root;
};

const wrap = (input: [number, ...(number | null)[]]) =>
  TreeNode.array(bstToGst(TreeNode.node(input)) ?? TreeNode.node([0]));

exercise(wrap, [
  [[[0, null, 1]], [1, null, 1]],
  [
    [[4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8]],
    [30, 36, 21, 36, 35, 26, 15, null, null, null, 33, null, null, null, 8],
  ],
]);
