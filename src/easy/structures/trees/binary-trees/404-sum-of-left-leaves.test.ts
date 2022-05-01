import { TreeNode } from "shared/structures";

const sumOfLeftLeaves = (root: TreeNode | null): number => {
  if (!root) return 0;

  let sum = 0;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift()!;

    if (node.left) {
      if (!node.left.left && !node.left.right) {
        sum += node.left.val;
      } else queue.push(node.left);
    }
    if (node.right) queue.push(node.right);
  }

  return sum;
};

describe("sum of left leaves", () => {
  it("Should sum correctly", () => {
    expect(sumOfLeftLeaves(null)).toBe(0);
  });

  it("Should sum correctly", () => {
    expect(sumOfLeftLeaves(new TreeNode(4))).toBe(0);
  });

  it("Should sum correctly", () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    expect(sumOfLeftLeaves(root)).toBe(2);
  });
});