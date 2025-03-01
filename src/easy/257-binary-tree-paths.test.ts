import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { TreeNode } from "@shared/structures/TreeNode.ts";

const utility = (node: TreeNode | null, path: string, result: string[]): string[] => {
  if (!node) return result;

  if (!node.left && !node.right) {
    result.push(`${path}${node.val}`);
    return result;
  }

  if (node.left) utility(node.left, `${path}${node.val}->`, result);
  if (node.right) utility(node.right, `${path}${node.val}->`, result);
  return result;
};

const binaryTreePaths = (root: TreeNode | null): string[] => utility(root, "", []);

describe("257-binary-tree-paths", () => {
  it("Case 0", () => {
    expect(binaryTreePaths(null)).toEqual([]);
  });
});
