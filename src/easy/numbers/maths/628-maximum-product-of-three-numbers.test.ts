export {};

const multiply = (a: number, b: number) => a * b;
const product = (...numbers: number[]) => numbers.reduce(multiply, 1);
const maximumProduct = (nums: number[]): number => {
  nums.sort((a, b) => a - b);

  return Math.max(
    product(...nums.slice(0, 2), nums[nums.length - 1]),
    product(...nums.slice(nums.length - 3)),
  );
};

describe("Maximum product of three numbers", () => {
  it("#1", () => {
    expect(maximumProduct([1, 2, 3])).toBe(6);
  });

  it("#2", () => {
    expect(maximumProduct([1, 2, 3, -4])).toBe(6);
  });
});
