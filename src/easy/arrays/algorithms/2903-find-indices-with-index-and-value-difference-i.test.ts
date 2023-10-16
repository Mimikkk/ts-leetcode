export {};

const findIndices = (
  nums: number[],
  indexDifference: number,
  valueDifference: number,
): [number, number] | [-1, -1] => {
  for (let i = 0; i < nums.length - indexDifference; ++i) {
    for (let j = i + indexDifference; j < nums.length; ++j) {
      if (Math.abs(nums[i] - nums[j]) >= valueDifference) return [i, j];
    }
  }

  return [-1, -1];
};

describe("2903 - Find Indices With Index and Value Difference I", () => {
  it("case 1", () => {
    expect(findIndices([5, 1, 4, 1], 2, 4)).toEqual([0, 3]);
  });
  it("case 2", () => {
    expect(findIndices([1, 1, 1, 1], 0, 4)).toEqual([-1, -1]);
  });
});
