import { expect } from "vitest";

export {};

const countBits = (n: number) => {
  let count = 0;
  while ((n & 1 && ++count, n)) n >>= 1;
  return count;
};

const sumIndicesWithKSetBits = (nums: number[], k: number): number => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) if (countBits(i) === k) sum += nums[i];
  return sum;
};

describe("2859. sum", () => {
  it("case 1", () => {
    expect(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1)).toBe(13);
  });

  it("case 2", () => {
    expect(sumIndicesWithKSetBits([4, 3, 2, 1], 2)).toBe(1);
  });
});
