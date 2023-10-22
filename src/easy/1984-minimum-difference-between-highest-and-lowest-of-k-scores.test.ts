import { A } from "@shared/modules";

const minimumDifference = (nums: number[], k: number): number => {
  nums.sort(A.N.asc);
  let min = Infinity;

  for (let i = k - 1; i < nums.length; ++i) {
    min = Math.min(min, nums[i] - nums[i - k + 1]);
  }

  return min;
};

describe("min difference", () => {
  it("should return the minimum difference", () => {
    expect(minimumDifference([90], 1)).toBe(0);
    expect(minimumDifference([9, 4, 1, 7], 2)).toBe(2);
  });
});