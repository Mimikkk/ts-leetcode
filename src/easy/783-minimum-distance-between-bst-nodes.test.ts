import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { TreeNode } from "@shared/structures/TreeNode.ts";
import node = TreeNode.node;

const minDiffInBST = (root: TreeNode | null): number => {
  let min = Infinity;

  const stack = [];

  let [node, parent]: [TreeNode | null, TreeNode | null] = [root, null];
  while (stack.length || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop()!;
    if (parent) min = Math.min(min, node.val - parent.val);
    [parent, node] = [node, node?.right];
  }

  return min;
};

describe("min distance between bst nodes", () => {
  it("case 1", () => {
    expect(minDiffInBST(node([4, 2, 6, 1, 3]))).toEqual(1);
  });

  it("case 2", () => {
    expect(minDiffInBST(node([1, 0, 48, null, null, 12, 49]))).toEqual(1);
  });

  it("case 3", () => {
    expect(minDiffInBST(node([90, 69, null, 49, 89, null, 52]))).toEqual(1);
  });
});
