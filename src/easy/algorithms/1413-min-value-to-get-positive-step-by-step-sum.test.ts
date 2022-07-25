const minStartValue = (nums: number[]): number => {
  let min = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum < min) min = sum;
  }

  return min < 0 ? -min +1 : 1;
};

describe("min start value", () => {
  it("case 1", () => {
    expect(minStartValue([1, 2])).toBe(1);
  });

  it("case 2", () => {
    expect(minStartValue([1, 2, 3])).toBe(1);
  });

  it("case 3", () => {
    expect(minStartValue([1, -2, -3])).toBe(5);
  });

  it("case 4", () => {
    expect(minStartValue([-3,2,-3,4,2])).toBe(5);
  });
});