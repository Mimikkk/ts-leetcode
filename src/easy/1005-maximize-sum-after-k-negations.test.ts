export {};

const add = (a: number, b: number) => a + b;
const sum = (a: number[]) => a.reduce(add) ?? NaN;

const largestSumAfterKNegations = (nums: number[], k: number) => {
  while (k-- > 0) nums[nums.indexOf(Math.min(...nums))] *= -1;
  return sum(nums);
};

describe("largest sum after k negations", () => {
  it("case 1", () => {
    expect(largestSumAfterKNegations([4, 2, 3], 1)).toEqual(5);
  });

  it("case 2", () => {
    expect(largestSumAfterKNegations([3, -1, 0, 2], 3)).toEqual(6);
  });
});
