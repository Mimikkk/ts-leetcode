export {};

const missingNumber = (nums: number[]) => nums.length * (nums.length + 1) / 2 - nums.reduce((a, b) => a + b);

describe("268. Missing Number", () => {
  test("#1", () => {
    expect(missingNumber([3, 0, 1])).toEqual(2);
  });
  test("#2", () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toEqual(8);
  });
});