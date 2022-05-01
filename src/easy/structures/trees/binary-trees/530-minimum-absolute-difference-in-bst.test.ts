import { TreeNode } from "shared/structures";
import node = TreeNode.node;

const getMinimumDifference = (root: TreeNode | null): number => {
  const utility = (node: TreeNode | null, min: number, max: number): number => node ?
    Math.min(utility(node.left, min, node.val), utility(node.right, node.val, max)):
    max - min;

  return utility(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

describe("minimum difference", () => {
  it("1 difference", () => {
    expect(getMinimumDifference(node([1, 0, 48, null, null, 12, 49]))).toEqual(1);
  });

  it("1 difference", () => {
    expect(getMinimumDifference(node([4, 2, 6, 1, 3]))).toEqual(1);
  });
});