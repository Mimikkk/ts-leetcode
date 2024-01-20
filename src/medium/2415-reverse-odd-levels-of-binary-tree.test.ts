import { TreeNode } from "@shared/structures/index.js";
import { exercise } from "@shared/utilities/exercise.js";

const reverseOddLevels = (root: TreeNode | null): TreeNode | null => {
  if (!root) return null;

  let level = 0;
  let queue: TreeNode[] = [root];
  while (queue.length) {
    const nodes: TreeNode[] = [];

    while (queue.length) {
      const { left, right } = queue.shift()!;

      if (left) nodes.push(left);
      if (right) nodes.push(right);
    }

    if (++level % 2) {
      for (let i = 0; i < nodes.length / 2; ++i) {
        const temp = nodes[i].val;
        nodes[i].val = nodes[nodes.length - 1 - i].val;
        nodes[nodes.length - 1 - i].val = temp;
      }
    }

    queue = nodes;
  }

  return root;
};

exercise(reverseOddLevels, [
  [[TreeNode.node([2, 3, 5, 8, 13, 21, 34])], TreeNode.node([2, 5, 3, 8, 13, 21, 34])],
  [[TreeNode.node([7, 13, 11])], TreeNode.node([7, 11, 13])],
  [
    [TreeNode.node([0, 1, 2, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2])],
    TreeNode.node([0, 2, 1, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1]),
  ],
]);
