import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { TreeNode } from "@shared/structures/TreeNode.ts";
import node = TreeNode.node;

const findSecondMinimumValue = (root: TreeNode | null): number => {
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
  const secondMin = [...new Set(result)][1];
  return secondMin === undefined ? -1 : secondMin;
};

describe("find second minimum value", () => {
  it("case 1", () => {
    expect(findSecondMinimumValue(node([2, 2, 5, null, null, 5, 7]))).toEqual(5);
  });

  it("case 2", () => {
    expect(findSecondMinimumValue(node([2, 2, 2]))).toEqual(-1);
  });
});
