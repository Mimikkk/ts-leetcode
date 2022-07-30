export {};

const countKDifference = (nums: number[], k: number): number => {
  let count = 0;

  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
        if (Math.abs(nums[i] - nums[j]) == k) ++count;
    }
  }

  return count;
};

describe("count with absolute diff of k", () => {
  it("should return the correct count", () => {
    expect(countKDifference([1, 2, 2, 1], 1)).toBe(4);
  });
});
