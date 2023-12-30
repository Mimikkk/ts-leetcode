import { describe, it } from "vitest";
import { trimlines } from "./text.js";
import { Tree } from "./tree.js";

describe("Draw - Tree", () => {
  it("should draw an edge", () => {
    expect(Tree.edge("p", "a", "b")).toBe(
      trimlines(`
        ╭─p─╮
        a   b
      `),
    );
  });

  it("should draw a tree", () => {
    expect(Tree.edge("p", "a", Tree.edge("q", "b", Tree.edge("q", "b", "c")))).toBe(
      trimlines(`
        ╭──p───╮
        a   ╭──q──╮
            b   ╭─q─╮
                b   c
      `),
    );
  });

  it("should draw a tree without b node", () => {
    expect(Tree.edge("p", "a", Tree.edge("q", undefined, Tree.edge("q", "b", "c")))).toBe(
      trimlines(`
        ╭─p─╮
        a   q─╮
            ╭─q─╮
            b   c
      `),
    );
  });

  it("should draw a tree without b and c nodes", () => {
    expect(Tree.edge("p", "a", Tree.edge("q", undefined, Tree.edge("q", "b", undefined)))).toBe(
      trimlines(`
        ╭─p─╮
        a   q─╮
             ╭q
             b
      `),
    );
  });
});
