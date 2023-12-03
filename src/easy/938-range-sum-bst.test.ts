import { TreeNode } from "@shared/structures/TreeNode.js";
import node = TreeNode.node;

const rangeSumBST = (root: TreeNode | null, low: number, high: number): number => {
  const stack = [root];

  let sum = 0;
  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;

    if (node.val >= low && node.val <= high) sum += node.val;
    if (node.val > low) stack.push(node.left);
    if (node.val < high) stack.push(node.right);
  }

  return sum;
};

describe("range sum bst", () => {
  it("case 1", () => {
    expect(rangeSumBST(node([1, 2, 3]), 0, 10)).toEqual(6);
  });

  it("case 1", () => {
    expect(rangeSumBST(node([1, 2, 11]), 0, 10)).toEqual(3);
  });
});
