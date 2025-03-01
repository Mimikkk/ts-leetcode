import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const thirdMax = (nums: number[]): number => {
  nums = [...new Set(nums)];
  nums.sort((a, b) => b - a);

  if (nums.length > 2) nums.length = 3;
  else return Math.max(...nums);
  return Math.min(...nums);
};

describe("Third max", () => {
  it("should return third maximum number from array", () => {
    expect(thirdMax([3, 2, 1])).toEqual(1);
  });

  it("should return third maximum number from array", () => {
    expect(thirdMax([1, 2])).toEqual(2);
  });

  it("should return third maximum number from array", () => {
    expect(thirdMax([2, 2, 3, 1])).toEqual(1);
  });
});
