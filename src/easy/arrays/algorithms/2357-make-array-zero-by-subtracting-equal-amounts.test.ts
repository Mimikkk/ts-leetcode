export {};

const minimumOperations = (nums: number[]): number => [...new Set(nums)].length;

describe("min ops", () => {
  it("case 1", () => {
    expect(minimumOperations([1, 2, 3, 4, 5])).toEqual(5);
    expect(minimumOperations([1, 5, 8, 12, 15])).toEqual(5);
  });
});