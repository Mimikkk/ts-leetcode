export {};

const minMaxGame = (nums: number[]) => {
  const size = Math.log2(nums.length);

  for (let i = size; i > 0; --i) {
    const turnSize = Math.pow(2, i - 1);

    for (let j = 0; j < turnSize; ++j) {
      nums[j] = (j & 1 ? Math.max : Math.min)(nums[j * 2], nums[j * 2 + 1]);
    }
  }

  return nums[0];
};

describe("min max game", () => {
  it("case 1", () => {
    expect(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2])).toEqual(1);
  });
  it("case 2", () => {
    expect(minMaxGame([3])).toEqual(3);
  });
});