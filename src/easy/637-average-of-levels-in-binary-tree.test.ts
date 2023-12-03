import { TreeNode } from "@shared/structures/TreeNode.js";
import node = TreeNode.node;

const averageOfLevels = (root: TreeNode | null): number[] => {
  if (!root) return [];

  const averages = [];

  let nextLevel = [root];
  while (nextLevel.length) {
    const currentLevel = nextLevel;
    nextLevel = [];

    let sum = 0;
    let count = 0;
    while (currentLevel.length) {
      const node = currentLevel.pop()!;

      sum += node.val;
      ++count;

      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }
    averages.push(sum / count);
  }

  return averages;
};

describe(" averageOfLevels", () => {
  describe("case 1", () => {
    it("should return []", () => {
      expect(averageOfLevels(node([1]))).toEqual([1]);
    });
  });

  describe("case 1", () => {
    it("should return []", () => {
      expect(averageOfLevels(node([1, 2, 6]))).toEqual([1, 4]);
    });
  });
});
