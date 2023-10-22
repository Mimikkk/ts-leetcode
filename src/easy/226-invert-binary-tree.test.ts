import { TreeNode } from "@shared/structures";

const invertTree = (root: TreeNode | null): TreeNode | null => {
  let stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (node) {
      [node.left, node.right] = [node.right, node.left];
      stack.push(node.left);
      stack.push(node.right);
    }
  }

  return root;
};

describe("226 - invert binary tree", () => {
  it("should invert tree", () => {
    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(9);

    const inverted = invertTree(root);
    expect(inverted).toBeDefined();
    expect(inverted!.val).toBe(4);
    expect(inverted!.left!.val).toBe(7);
    expect(inverted!.right!.val).toBe(2);
    expect(inverted!.left!.left!.val).toBe(9);
    expect(inverted!.left!.right!.val).toBe(6);
    expect(inverted!.right!.left!.val).toBe(3);
    expect(inverted!.right!.right!.val).toBe(1);
  });
});