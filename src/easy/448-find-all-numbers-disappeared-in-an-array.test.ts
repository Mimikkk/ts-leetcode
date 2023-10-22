export {};

const findDisappearedNumbers = (nums: number[]) => {
  const occurred = new Set(nums);

  let result = [];
  for (let n = 1; n <= nums.length; ++n) if (!occurred.has(n)) result.push(n);

  return result;
};

describe("findDisappearedNumbers", () => {
  it("Case 1", () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
  });

  it("Case 2", () => {
    expect(findDisappearedNumbers([1, 1])).toEqual([2]);
  });
});