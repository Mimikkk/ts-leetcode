import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const maxProductDifference = (nums: number[]): number => {
  nums.sort((a, b) => a - b);
  return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
};

describe("max product difference", () => {
  it("should pass", () => {
    expect(maxProductDifference([5, 6, 2, 7, 4])).toEqual(34);
  });

  it("should pass", () => {
    expect(maxProductDifference([4, 2, 5, 9, 7, 4, 8])).toEqual(64);
  });
});