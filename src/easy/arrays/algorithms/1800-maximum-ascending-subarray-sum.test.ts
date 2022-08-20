export {};

const maxAscendingSum = (nums: number[]) => {
  let max = -Infinity;
  let i = 0;
  while (i < nums.length) {
    let j = i + 1;
    while (j < nums.length && nums[j] > nums[j - 1]) ++j;

    max = Math.max(
      max,
      nums.slice(i, j).reduce((a, b) => a + b, 0),
    );
    i = j;
  }

  return max;
};

describe("max ascending sum", () => {
  it("case 1", () => {
    expect(maxAscendingSum([10, 20, 30, 5, 10, 50])).toBe(65);
  });
});