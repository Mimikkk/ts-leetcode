import { TreeNode } from "@shared/structures/TreeNode.js";
import node = TreeNode.node;

const searchBST = (root: TreeNode | null, target: number): TreeNode | null => {
  const stack = [root];

  while (stack.length) {
    const node = stack.pop()!;

    if (node) {
      if (node.val === target) return node;

      if (node.val > target) stack.push(node.left);
      else stack.push(node.right);
    }
  }

  return null;
};

describe("search bst", () => {
  it("case 1", () => {
    expect(searchBST(node([4, 2, 7, 1, 3]), 2)).toEqual(node([2, 1, 3]));
  });

  it("case 2", () => {
    expect(searchBST(node([4, 2, 1, 3, 7]), 5)).toEqual(null);
  });
});
