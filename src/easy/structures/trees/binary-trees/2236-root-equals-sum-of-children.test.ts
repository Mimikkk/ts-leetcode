import { TreeNode } from "shared/structures";

const checkTree = (root: TreeNode | null): boolean => {
  if (!root) return false;
  let rootsum = root.val;

  let sum = 0;
  const stack = [root.left, root.right];
  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;

    sum += node.val;
    stack.push(node.left, node.right);
  }
  return rootsum === sum;
};

describe("check tree", () => {
  it("case 1", () => {
    expect(checkTree(TreeNode.node([5, 2, 3]))).toBe(true);
    expect(checkTree(TreeNode.node([6, 2, 3, 1]))).toBe(true);
  });
});
