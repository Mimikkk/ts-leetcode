import { TreeNode } from "@shared/structures";

const hasPathSum = (root: TreeNode | null, target: number): boolean => {
  if (!root) return false;

  if (!root.left && !root.right) return root.val === target;

  return hasPathSum(root.left, target - root.val) || hasPathSum(root.right, target - root.val);
};

describe("112 - path sum", () => {
  it("should return true", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    expect(hasPathSum(root, 7)).toBe(true);
  });

  it("empty tree", () => {
    const root = null;
    expect(hasPathSum(root, 22)).toBe(false);
  });
});
