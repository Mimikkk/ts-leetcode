export {};

const findSubarrays = (nums: number[]): boolean => {
  const sums = new Set();

  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    if (sums.has(sum)) return true;
    sums.add(sum);
    sum -= nums[i - 1];
  }

  return false;
};

describe("2395 - with equal sums", () => {
  it("case 1", () => {
    expect(findSubarrays([4, 2, 4])).toBe(true);
  });

  it("case 2", () => {
    expect(findSubarrays([1, 2, 3, 4, 5])).toBe(false);
  });

  it("case 3", () => {
    expect(findSubarrays([0, 0, 0])).toBe(true);
  });
});
