import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const minOperations = (nums: number[], k: number): number => {
  const set = new Set();

  nums = nums.reverse();

  let operations = 0;
  for (let i = 0; i < nums.length; ++i) {
    ++operations;
    const n = nums[i];

    if (n <= k) {
      set.add(n);

      if (set.size === k) return operations;
    }
  }

  return operations;
};

describe("has groups size", () => {
  it("case 1", () => {
    expect(minOperations([3, 1, 5, 4, 2], 2)).toEqual(4);
  });

  it("case 2", () => {
    expect(minOperations([3, 1, 5, 4, 2], 5)).toEqual(5);
  });

  it("case 3", () => {
    expect(minOperations([3, 2, 5, 3, 1], 3)).toEqual(4);
  });
});
