import { TreeNode } from "shared/structures";

const lowestCommonAncestor = (root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null => {
  if (!root || !p || !q) return root;
  let stack = [root];

  while(stack.length) {
    const node = stack.pop()!;

    if (node.val > p.val && node.val > q.val) stack.push(node.left!);
    else if (node.val < p.val && node.val < q.val) stack.push(node.right!);
    else return node;
  }

  return null;
};

describe("235 - lowest common ancestor of a binary search tree", () => {
  it("has depth 0", () => {
    const root = new TreeNode(3);
    const p = new TreeNode(5);
    const q = new TreeNode(1);
    expect(lowestCommonAncestor(root, p, q)).toBe(root);
  });
});