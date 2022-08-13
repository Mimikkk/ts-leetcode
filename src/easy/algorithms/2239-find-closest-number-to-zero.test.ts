export {};
const findClosestNumber = (nums: number[]) => {
  let closest = Infinity;
  const unique = [...new Set(nums)];

  for (const num of unique) {
    if (Math.abs(num) < Math.abs(closest)) closest = num;
    if (Math.abs(num) == Math.abs(closest) && num > closest) closest = num;
  }

  return closest;
};

describe("find", () => {
  it("case 1", () => {
    expect(findClosestNumber([-1, 1, 2, 3, 4, 5])).toBe(1);
  });
});
