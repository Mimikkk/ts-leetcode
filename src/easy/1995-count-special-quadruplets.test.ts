export {};

const countQuadruplets = (nums: number[]): number => {
  let count = 0;

  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      for (let k = j + 1; k < nums.length; ++k) {
        for (let l = k + 1; l < nums.length; ++l) {
          if (nums[i] + nums[j] + nums[k] === nums[l]) ++count;
        }
      }
    }
  }

  return count;
};

describe("count quadruplets", () => {
  it("case 1", () => {
    expect(countQuadruplets([1, 2, 3, 6])).toBe(1);
  });

  it("case 2", () => {
    expect(countQuadruplets([3, 3, 6, 4, 5])).toBe(0);
  });

  it("case 3", () => {
    expect(countQuadruplets([1, 1, 1, 3, 5])).toBe(4);
  });
});