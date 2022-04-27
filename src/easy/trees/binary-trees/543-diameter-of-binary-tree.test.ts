import { TreeNode } from "shared/structures";
import node = TreeNode.node;

const diameterOfBinaryTree = (root: TreeNode | null): number => {
  let max = 0;
  const traverse = (node: TreeNode | null): number => {
    if (!node) return 0;

    const left = traverse(node.left);
    const right = traverse(node.right);

    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  };

  traverse(root);
  return max;
};

describe("Diameter of binary tree", () => {
  it("1 diameter", () => {
    expect(diameterOfBinaryTree(node([1, 2, 3, 4, 5]))).toEqual(3);
  });

  it("1 diameter", () => {
    expect(diameterOfBinaryTree(node([1, 2]))).toEqual(1);
  });

  it("1 diameter", () => {
    expect(diameterOfBinaryTree(node([4,
      -7,
      -3,
      null,
      null,
      -9,
      -3,
      9,
      -7,
      -4,
      null,
      6,
      null,
      -6,
      -6,
      null,
      null,
      0,
      6,
      5,
      null,
      9,
      null,
      null,
      -1,
      -4,
      null,
      null,
      null,
      -2]))).toEqual(8);
  });
});
