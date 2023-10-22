export {};

const isMonotonic = (nums: number[]): boolean => {
  if (nums.length === 1) return true;

  let increasing = true;
  let decreasing = true;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > nums[i - 1]) decreasing = false;
    else if (nums[i] < nums[i - 1]) increasing = false;
  }
  return increasing || decreasing;
};

describe("is monotonic", () => {
  it("case 1", () => {
    expect(isMonotonic([1, 2, 2, 3])).toEqual(true);
  });

  it("case 2", () => {
    expect(isMonotonic([6, 5, 4, 4])).toEqual(true);
  });

  it("case 3", () => {
    expect(isMonotonic([1, 3, 2])).toEqual(false);
  });
});