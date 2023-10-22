export {};

const canBeIncreasing = (nums: number[]) => {
  let hadElementRemoved = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      if (hadElementRemoved) return false;
      hadElementRemoved = true;
      if (i > 1 && nums[i] <= nums[i - 2]) nums[i] = nums[i - 1];
    }
  }
  return true;
};

describe("can be increasing", () => {
  it("case 1", () => {
    expect(canBeIncreasing([1, 2, 10, 5, 7])).toBe(true);
  });
  it("case 2", () => {
    expect(canBeIncreasing([10, 2, 3, 5, 7])).toBe(true);
  });
  it("case 3", () => {
    expect(canBeIncreasing([2, 3, 1, 2])).toBe(false);
  });
});
