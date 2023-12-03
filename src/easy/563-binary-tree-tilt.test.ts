import { TreeNode } from "@shared/structures/TreeNode.js";
import node = TreeNode.node;

const sum = (root: TreeNode | null): number => {
  let stack = [root];

  let sum = 0;
  while (stack.length) {
    let node = stack.pop()!;
    if (node) {
      sum += node.val;

      stack.push(node.left);
      stack.push(node.right);
    }
  }

  return sum;
};

const findTilt = (root: TreeNode | null): number => {
  let stack = [root];

  let tiltsum = 0;
  while (stack.length) {
    let node = stack.pop();

    if (node) {
      tiltsum += Math.abs(sum(node.left) - sum(node.right));
      stack.push(node.left);
      stack.push(node.right);
    }
  }

  return tiltsum;
};

describe("tilted tree", () => {
  it("1", () => {
    expect(findTilt(node([1, 2, 3]))).toEqual(1);
  });

  it("2", () => {
    expect(findTilt(node([4, 2, 9, 3, 5, null, 7]))).toEqual(15);
  });

  it("3", () => {
    expect(findTilt(node([21, 7, 14, 1, 1, 2, 2, 3, 3]))).toEqual(9);
  });
});
