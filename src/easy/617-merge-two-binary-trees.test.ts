import { TreeNode } from "@shared/structures/TreeNode.js";
import node = TreeNode.node;

const mergeTrees = (root1: TreeNode | null, root2: TreeNode | null): TreeNode | null => {
  if (!root1) return root2;
  if (!root2) return root1;
  if (!root1 && !root2) return null;

  let root = new TreeNode(root1.val + root2.val);

  root.left = mergeTrees(root1.left, root2.left);
  root.right = mergeTrees(root1.right, root2.right);

  return root;
};

describe("mergeTrees", () => {
  it("should merge two trees", () => {
    expect(mergeTrees(node([1, 3, 2, 5]), node([2, 1, 3, null, 4, null, 7]))).toEqual(node([3, 4, 5, 5, 4, null, 7]));
  });

  it("should merge two trees", () => {
    expect(mergeTrees(node([1]), node([1, 2]))).toEqual(node([2, 2]));
  });
});
