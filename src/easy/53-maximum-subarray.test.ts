import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const maxSubArray = (nums: number[]): number => {
  let n = nums.length;
  let max = nums[0];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i];

    if (sum > max) max = sum;
    if (sum < 0) sum = 0;
  }

  return max;
};

describe("53 - maximum subarray", () => {
  it("case 1", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });

  it("case 2", () => {
    expect(maxSubArray([1])).toEqual(1);
  });

  it("case 3", () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
  });

  it("case 4", () => {
    expect(maxSubArray([-2, 1])).toEqual(1);
  });

  it("case 5", () => {
    expect(maxSubArray([8, -19, 5, -4, 20])).toEqual(21);
  });

  it("case 6", () => {
    expect(maxSubArray([-1, 1, 2, 1])).toEqual(4);
  });

  it("case 7", () => {
    expect(maxSubArray([-2, -1])).toEqual(-1);
  });

  it("case 8", () => {
    expect(maxSubArray([-2, -3, -1])).toEqual(-1);
  });
});
