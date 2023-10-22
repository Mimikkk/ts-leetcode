import { TreeNode } from "@shared/structures";

const isBalanced = (root: TreeNode | null): boolean => {
  if (root === null) return true;
  const height = (node: TreeNode | null): number => node ?Math.max(height(node.left), height(node.right)) + 1:0;

  return Math.abs(height(root.left) - height(root.right)) <= 1
    && isBalanced(root.left)
    && isBalanced(root.right);
};

describe("110 - balanced binary tree", () => {
  it("one element", () => {
    expect(isBalanced(new TreeNode(1))).toBe(true);
  });

  it("two elements", () => {
    expect(isBalanced(new TreeNode(1, new TreeNode(2)))).toBe(true);
  });

  it("three elements", () => {
    expect(isBalanced(new TreeNode(1, new TreeNode(2, new TreeNode(3))))).toBe(false);
  });

  it("zero elements", () => {
    expect(isBalanced(null)).toBe(true);
  });

  it("Two left children", () => {
    expect(isBalanced(new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4)))))).toBe(false);
  });
});
