import { exercise } from "@shared/utilities/exercise.ts";
import { TreeNode } from "@shared/structures/index.ts";

const sumEvenGrandparent = (root: TreeNode | null): number => {
  if (!root) return 0;

  let stack = [root];
  let grandparents = new Set<TreeNode>();

  while (stack.length) {
    const node = stack.shift()!;

    if (node.val % 2 === 0) {
      if (node.left?.left) grandparents.add(node.left.left);
      if (node.left?.right) grandparents.add(node.left.right);
      if (node.right?.left) grandparents.add(node.right.left);
      if (node.right?.right) grandparents.add(node.right.right);
    }

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  let sum = 0;
  for (let node of grandparents.values()) sum += node.val;
  return sum;
};

const wrap = (input: [number, ...(number | null)[]]) => sumEvenGrandparent(TreeNode.node(input));

exercise(wrap, [
  [[[6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5]], 18],
  [[[1]], 0],
]);
