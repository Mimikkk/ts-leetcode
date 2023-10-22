import { TreeNode } from "@shared/structures";

function findMode(root: TreeNode | null): number[] {
  const occurrences: Record<number, number> = {};
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (node) {
      occurrences[node.val] = occurrences[node.val] + 1 || 1;
      stack.push(node.left);
      stack.push(node.right);
    }
  }

  let max = Math.max(...Object.values(occurrences));
  return Object.entries(occurrences)
    .filter(([_, count]) => count === max)
    .map(([val]) => Number(val));
}

describe("src/easy/binary-trees/501-find-mode-in-binary-search-tree.ts", () => {
  it("Case 0", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(2);
    expect(findMode(root)).toEqual([2]);
  });
});