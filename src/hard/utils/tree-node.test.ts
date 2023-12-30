import { describe, it } from "vitest";
import { trimlines } from "./text.js";
import { Tree } from "./tree.js";
import { TreeNode } from "@shared/structures/index.js";

describe("Draw - Tree-Node", () => {
  it("should draw a tree", () => {
    const tree = TreeNode.node([1, 2, 3, 4, 5, 6, 7]);

    expect(Tree.tree(tree)).toBe(
      trimlines(`
         ╭───1────╮
       ╭─2──╮   ╭─3──╮
       4    5   6    7
      `),
    );
  });

  it("should draw a tree without 3, 6 nodes", () => {
    const tree = TreeNode.node([1, 2, null, 4, 5, null, 7]);

    expect(Tree.tree(tree)).toBe(
      trimlines(`
         ╭──1
      ╭──2───╮
      4╮     5
       7
      `),
    );
  });
});
