import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const maxPower = (s: string): number => {
  let max = 0;
  let current = 1;

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === s[i + 1]) {
      ++current;
    } else {
      max = Math.max(max, current);
      current = 1;
    }
  }

  return Math.max(max, current);
};

describe("max power", () => {
  it("case 1", () => {
    expect(maxPower("leetcode")).toBe(2);
  });

  it("case 2", () => {
    expect(maxPower("abbcccddddeeeeedcba")).toBe(5);
  });

  it("case 3", () => {
    expect(maxPower("cc")).toBe(2);
  });
});
