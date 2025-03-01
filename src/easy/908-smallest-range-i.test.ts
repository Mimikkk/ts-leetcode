import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const smallestRangeI = (nums: number[], k: number): number => {
  const range = Math.max(...nums) - Math.min(...nums);
  return range > 2 * k ? range - 2 * k : 0;
};

describe("Tests", () => {
  it("Test 1", () => {
    expect(smallestRangeI([1], 0)).toEqual(0);
  });

  it("Test 2", () => {
    expect(smallestRangeI([0, 10], 2)).toEqual(6);
  });

  it("Test 3", () => {
    expect(smallestRangeI([1, 3, 6], 3)).toEqual(0);
  });
});