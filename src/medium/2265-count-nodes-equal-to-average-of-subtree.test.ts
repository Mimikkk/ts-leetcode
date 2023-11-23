import { exercise } from "@shared/utilities/exercise";
import { TreeNode } from "@shared/structures";

const averageOfSubtree = (root: TreeNode | null): number => {
  if (!root) return 0;
  const stack: TreeNode[] = [];
  let prev: null | TreeNode = null;

  const mapSums = new Map<TreeNode, number>();
  const mapCounts = new Map<TreeNode, number>();

  let result = 0;
  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
      continue;
    }

    const node = stack[stack.length - 1];
    if (node.right && prev !== node.right) {
      root = node.right;
      continue;
    }

    const leftSum = mapSums.get(node.left!) ?? 0;
    const leftCount = mapCounts.get(node.left!) ?? 0;
    const rightSum = mapSums.get(node.right!) ?? 0;
    const rightCount = mapCounts.get(node.right!) ?? 0;

    const sum = node.val + leftSum + rightSum;
    const count = 1 + leftCount + rightCount;
    mapSums.set(node, sum);
    mapCounts.set(node, count);

    if (node.val === ~~(sum / count)) ++result;
    prev = stack.pop()!;
  }

  return result;
};

exercise(averageOfSubtree, [[[TreeNode.node([4, 8, 5, 0, 1, null, 6])], 5]]);
