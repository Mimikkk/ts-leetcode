import { TreeNode } from "@shared/structures/TreeNode.js";
import node = TreeNode.node;

const findTarget = (root: TreeNode | null, k: number): boolean => {
  const complement = new Set();

  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    if (node) {
      if (complement.has(node.val)) return true;
      complement.add(k - node.val);
      stack.push(node.left, node.right);
    }
  }

  return false;
};

describe("Find target", () => {
  it("can find target", () => {
    expect(findTarget(node([5, 3, 6, 2, 4, null, 7]), 9)).toEqual(true);
  });

  it("can find target", () => {
    expect(findTarget(node([5, 3, 6, 2, 4, null, 7]), 28)).toEqual(false);
  });

  it("can find target", () => {
    expect(findTarget(node([0, -2, 3, null, -1, null, 4]), -2)).toEqual(true);
  });
});
