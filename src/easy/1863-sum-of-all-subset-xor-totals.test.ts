export {};

const subsetXORSum = (nums: number[]) =>
  nums.reduce((a, b) => a | b, 0) * Math.pow(2, nums.length - 1);

describe("subset xor sum", () => {
  it("case 1", () => {
    expect(subsetXORSum([1, 3])).toBe(6);
  });
  it("case 2", () => {
    expect(subsetXORSum([5, 1, 6])).toBe(28);
  });
  it("case 3", () => {
    expect(subsetXORSum([3, 4, 5, 6, 7, 8])).toBe(480);
  });
});
