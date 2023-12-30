import { describe, it } from "vitest";
import { trimlines } from "./text.js";

export namespace Tree {
  export const edge = (parent: string, left?: string, right?: string): string => {
    return "";
  };
}

describe("Draw - Tree", () => {
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
});
