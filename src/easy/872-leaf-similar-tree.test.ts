import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { TreeNode } from "@shared/structures/TreeNode.ts";
import node = TreeNode.node;

const leaves = (root: TreeNode | null) => {
  let values = [];

  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    if (!node) continue;

    if (!node.left && !node.right) values.push(node.val);
    stack.push(node.right);
    stack.push(node.left);
  }

  return values;
};
const areEqual = (a: number[], b: number[]) => a.length === b.length && a.every((v, i) => v === b[i]);

const leafSimilar = (root1: TreeNode | null, root2: TreeNode | null) => areEqual(leaves(root1), leaves(root2));

describe("leaf similar", () => {
  it("case 1", () => {
    expect(leafSimilar(node([1, 2, 3]), node([1, 2, 3]))).toEqual(true);
  });

  it("case 2", () => {
    expect(leafSimilar(node([1, 2, 3]), node([1, 3, 2]))).toEqual(false);
  });

  it("case 3", () => {
    expect(
      leafSimilar(
        node([3, 5, 1, 6, 2, 9, 8, null, null, 7, 14]),
        node([3, 5, 1, 6, 71, 4, 2, null, null, null, null, null, null, 9, 8]),
      ),
    ).toEqual(false);
  });
});
