import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const containsPattern = (arr: number[], m: number, k: number): boolean => {
  for (let i = m, count = 0; i < arr.length; ++i) {
    if (arr[i] != arr[i - m]) count = 0;
    else if (++count == m * (k - 1)) return true;
  }
  return false;
};

describe("contains pattern", () => {
  it("case 1", () => {
    expect(containsPattern([1, 2, 4, 4, 4, 4], 1, 3)).toBe(true);
  });

  it("case 2", () => {
    expect(containsPattern([1, 2, 1, 2, 1, 1, 1, 3], 2, 2)).toBe(true);
  });

  it("case 3", () => {
    expect(containsPattern([1, 2, 1, 2, 1, 3], 2, 3)).toBe(false);
  });
});
