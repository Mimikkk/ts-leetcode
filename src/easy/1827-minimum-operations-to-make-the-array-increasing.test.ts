import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const minOperations = (nums: number[]): number => {
  let count = 0;

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] <= nums[i - 1]) {
      const s = nums[i - 1] - nums[i] + 1;
      nums[i] += s;
      count += s;
    }
  }

  return count;
};

describe("min operations", () => {
  it("case 1", () => {
    expect(minOperations([1, 1, 1])).toBe(3);
  });

  it("case 2", () => {
    expect(minOperations([1, 5, 2, 4, 1])).toBe(14);
  });

  it("case 3", () => {
    expect(minOperations([8])).toBe(0);
  });
});
