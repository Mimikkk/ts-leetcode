import { TreeNode } from "@shared/structures/TreeNode.ts";
const levelOrder = (root: TreeNode | null): number[][] => {
  if (!root) return [];

  const levels = [];

  let nextLevel = [root];
  while (nextLevel.length) {
    const currentLevel = nextLevel;
    nextLevel = [];

    let level = [];
    while (currentLevel.length) {
      const node = currentLevel.shift()!;

      level.push(node.val);
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }
    levels.push(level);
  }

  return levels;
};
