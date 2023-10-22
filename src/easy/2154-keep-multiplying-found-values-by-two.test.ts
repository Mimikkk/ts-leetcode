export {};

const findFinalValue = (nums: number[], original: number): number => {
  while (nums.includes(original)) original *= 2;
  return original;
};

describe("find final", () => {
  it("case 1", () => {
    expect(findFinalValue([5, 3, 6, 1, 12], 3)).toEqual(24);
  });

  it("case 2", () => {
    expect(findFinalValue([2, 7, 9], 4)).toEqual(4);
  });
});