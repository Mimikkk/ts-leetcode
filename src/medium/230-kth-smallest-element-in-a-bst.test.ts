import { TreeNode } from "@shared/structures/TreeNode.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

import node = TreeNode.node;

const kthSmallest = (root: TreeNode | null, k: number): number => {
  if (!root) return -1;

  const result = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop()!;
    result.push(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  result.sort((a, b) => a - b);
  const kMin = [...new Set(result)][k - 1];
  return kMin === undefined ? -1 : kMin;
};

// TODO - rewrite as BST not BT
describe("kth smallest", () => {
  it("case 1", () => {
    expect(kthSmallest(null, 1)).toEqual(-1);
  });

  it("case 2", () => {
    expect(kthSmallest(node([1, 2, 3]), 1)).toEqual(1);
  });

  it("case 3", () => {
    expect(kthSmallest(node([1, 2, 3]), 2)).toEqual(2);
  });

  it("case 4", () => {
    expect(kthSmallest(node([1, 2, 3]), 3)).toEqual(3);
  });

  it("case 5", () => {
    expect(kthSmallest(node([1, 2, 3]), 4)).toEqual(-1);
  });
});
