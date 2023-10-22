export {};

const findLengthOfLCIS = (nums: number[]): number => {
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) ++count;
    else {
      max = Math.max(max, count);
      count = 1;
    }
  }

  return Math.max(max, count);
};

describe("find longest of lcis", () => {
  it("case 1", () => {
    expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toEqual(3);
  });

  it("case 2", () => {
    expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toEqual(1);
  });

  it("case 3", () => {
    expect(findLengthOfLCIS([2])).toEqual(1);
  });

  it("case 4", () => {
    expect(findLengthOfLCIS([])).toEqual(0);
  });
});