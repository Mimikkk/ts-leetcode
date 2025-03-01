import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const maximumDifference = (nums: number[]): number => {
  let [min, max] = [nums[0], -1];

  for (let i = 0; i < nums.length; ++i) {
    max = Math.max(max, nums[i] - min);
    min = Math.min(min, nums[i]);
  }

  return max || -1;
};

describe("maximum difference between increasing elements", () => {
  it("case 1", () => {
    expect(maximumDifference([7, 1, 5, 4])).toBe(4);
  });

  it("case 2", () => {
    expect(maximumDifference([9, 4, 3, 2])).toBe(-1);
  });

  it("case 3", () => {
    expect(maximumDifference([1, 5, 2, 10])).toBe(9);
  });

  it("case 4", () => {
    expect(maximumDifference([87, 68, 91, 86, 58, 63, 43, 98, 6, 40])).toBe(55);
  });

  it("case 5", () => {
    expect(maximumDifference([44, 21, 43, 5, 24])).toBe(22);
  });
});
