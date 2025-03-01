import { TreeNode } from "@shared/structures/TreeNode.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const minDepth = (root: TreeNode | null): number => {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

describe("111 - minimum depth of binary tree", () => {
  it("no node", () => {
    expect(minDepth(null)).toEqual(0);
  });

  it("One node", () => {
    expect(minDepth(new TreeNode(1))).toEqual(1);
  });

  it("Two nodes", () => {
    expect(minDepth(new TreeNode(1, new TreeNode(2)))).toEqual(2);
  });

  it("Three nodes", () => {
    expect(minDepth(new TreeNode(1, new TreeNode(2, new TreeNode(3))))).toEqual(3);
  });

  it("both children", () => {
    expect(minDepth(new TreeNode(1, new TreeNode(1), new TreeNode(1)))).toEqual(2);
  });
});
