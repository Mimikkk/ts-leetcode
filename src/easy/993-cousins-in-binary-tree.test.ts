import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { TreeNode } from "@shared/structures/TreeNode.ts";
import node = TreeNode.node;

const isCousins = (root: TreeNode | null, x: number, y: number): boolean => {
  if (!root) return false;

  let nextLevel: [TreeNode, TreeNode | null][] = [[root, null]];
  while (nextLevel.length) {
    const currentLevel = nextLevel;
    nextLevel = [];

    let count = 0;
    let cousinParent = null;
    while (currentLevel.length) {
      const [node, parent] = currentLevel.pop()!;

      if (node.val === x || node.val === y) {
        if (cousinParent && cousinParent !== parent) return true;
        else if (!cousinParent) cousinParent = parent;
      }

      if (count > 1) return true;

      if (node.left) nextLevel.push([node.left, node]);
      if (node.right) nextLevel.push([node.right, node]);
    }
  }

  return false;
};

describe("is cousin", () => {
  it("is cousin", () => {
    expect(isCousins(node([1, 2, 3, 4]), 4, 3)).toBe(false);
  });

  it("is cousin", () => {
    expect(isCousins(node([1, 2, 3, null, 4, null, 5]), 5, 4)).toBe(true);
  });

  it("is cousin", () => {
    expect(isCousins(node([1, 2, 3, null, 4]), 2, 3)).toBe(false);
  });
});
