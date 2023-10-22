export {};

const largestPerimeter = (nums: number[]): number => {
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2]) return nums[i] + nums[i + 1] + nums[i + 2];
  }

  return 0;
};

describe("largest triangle area", () => {
  it("case 1", () => {
    expect(largestPerimeter([2, 1, 2])).toEqual(5);
  });

  it("case 2", () => {
    expect(largestPerimeter([1, 2, 1])).toEqual(0);
  });
});
