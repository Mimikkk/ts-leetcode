import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const makeVPS = (s: string): string => s.replace(/[^()]/gi, "");

const maxDepth = (s: string): number => {
  let depth = 0;

  let max = 0;
  [...makeVPS(s)].forEach((c) => {
    if (c === "(") {
      if (++depth > max) max = depth;
    } else --depth;
  });

  return max;
};

describe("max nexted depth of the parentheses", () => {
  it("case 1", () => {
    expect(maxDepth("(()())")).toBe(2);
    expect(maxDepth("(1+(2*3)+((8)/4))+1")).toBe(3);
    expect(maxDepth("(1)+((2))+(((3)))")).toBe(3);
  });
});
