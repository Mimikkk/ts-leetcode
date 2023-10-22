import { TreeNode } from "@shared/structures";

const evaluateTree = (root: TreeNode | null): boolean => {
  switch (root?.val) {
    case 1:
      return true;
    case 2:
      return evaluateTree(root.left) || evaluateTree(root.right);
    case 3:
      return evaluateTree(root.left) && evaluateTree(root.right);
    default:
      return false;
  }
};

describe("2331 - evaluate tree", () => {
  it("case 1", () => {
    expect(
      evaluateTree(TreeNode.node([2, 1, 3, null, null, 0, 1])),
    ).toBeTruthy();
  });
  it("case 2", () => {
    expect(evaluateTree(TreeNode.node([2]))).toBeFalsy();
  });
});
