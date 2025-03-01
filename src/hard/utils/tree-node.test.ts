import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

import { trimlines } from "./text.ts";
import { Tree } from "./tree.ts";
import { TreeNode } from "@shared/structures/index.ts";

describe("Draw - Tree-Node", () => {
  it("should draw a tree", () => {
    const tree = TreeNode.node([1, 2, 3, 4, 5, 6, 7]);

    expect(Tree.repr(tree)).toBe(
      trimlines`
         ╭───1────╮
       ╭─2──╮   ╭─3──╮
       4    5   6    7
      `,
    );
  });

  it("should draw a tree without 3, 6 nodes", () => {
    const tree = TreeNode.node([1, 2, null, 4, 5, null, 7]);

    expect(Tree.repr(tree)).toBe(
      trimlines`
         ╭──1
      ╭──2───╮
      4╮     5
       7
      `,
    );
  });
});
