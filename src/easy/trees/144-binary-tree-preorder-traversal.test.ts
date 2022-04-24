import { TreeNode } from "structures";

const preorderTraversal = (root: TreeNode | null): number[] => root ?
  [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]:
  [];

describe("144 - binary tree preorder traversal", () => {
  it("runs as expected", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    const result = preorderTraversal(root);
    expect(result).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });
});