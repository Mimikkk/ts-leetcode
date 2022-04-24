import { TreeNode } from "structures";

const postorderTraversal = (root: TreeNode | null): number[] => root ?
  [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]:
  [];

describe("145 - binary tree inorder traversal", () => {
  it("runs as expected", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    const result = postorderTraversal(root);
    expect(result).toEqual([4, 5, 2, 6, 7, 3, 1]);
  });
});