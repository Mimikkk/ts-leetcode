export {};

const twoSum = (nums: number[], target: number): number[] => {
  const complements: Record<number, number> = {};

  for (let i = 0; i < nums.length; ++i) {
    const complement = target - nums[i];

    if (complement in complements) return [complements[complement], i];
    complements[nums[i]] = i;
  }

  return [];
};

describe("1 - Two Sum", () => {
  it("1 - runs as expected", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);

    expect(result).toEqual([0, 1]);
  });

  it("2 - second example", () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);

    expect(result).toEqual([1, 2]);
  });
});
