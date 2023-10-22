type Triplet = [number, number, number];

const threeSum = (nums: number[]): Triplet[] => {
  for (let i = 0; i < nums.length; ++i) {
    const [a, b, c] = [nums[i], nums[i + 1], nums[i + 2]];
    if (a + b + c === 0) return [[a, b, c]];
  }
};

describe("threeSum", () => {
  it("case 1", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, 0, 1],
      [-1, -1, 2],
    ]);
  });
});
