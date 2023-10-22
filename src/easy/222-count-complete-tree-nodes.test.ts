export {};
import { TreeNode } from "@shared/structures";

const countNodes = (root: TreeNode | null): number => {
  let count = 0;

  const stack: TreeNode[] = [];
  if (root) stack.push(root);

  while (stack.length > 0) {
    const { left, right } = stack.pop()!;
    if (left !== null) stack.push(left);
    if (right !== null) stack.push(right);
    ++count;
  }

  return count;
};

describe("222 - count-complete-tree-nodes", () => {
  it("case 1", () => {
    expect(countNodes(TreeNode.node([1, 2, 3, 4, 5, 6]))).toEqual(6);
  });

  it("case 2", () => {
    expect(countNodes(null)).toEqual(0);
  });
});
