import { TreeNode } from "@shared/structures/TreeNode.js";
import node = TreeNode.node;

const isUnivalTree = (root: TreeNode | null): boolean => {
  if (!root) return true;

  const stack = [root];
  const target = root.val;
  while (stack.length) {
    const node = stack.pop()!;
    if (node.val !== target) return false;

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return true;
};

describe("is univalued", () => {
  it("case 1", () => {
    expect(isUnivalTree(node([1, 1, 1, 1, 1, null, 1]))).toBe(true);
  });

  it("case 2", () => {
    expect(isUnivalTree(node([1, 1, 1, 2, 1, null, 1]))).toBe(false);
  });
});
