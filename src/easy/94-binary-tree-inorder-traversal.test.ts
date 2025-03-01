import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { TreeNode } from "@shared/structures/TreeNode.ts";

const inorderTraversal = (root: TreeNode | null): number[] =>
  root ? [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : [];

describe("94 - binary tree inorder traversal", () => {
  it("runs as expected", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    const result = inorderTraversal(root);
    expect(result).toEqual([4, 2, 5, 1, 6, 3, 7]);
  });
});
