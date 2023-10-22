export {};

const range = (start: number, end: number) =>
  Array.from({ length:end - start }, (_, i) => i + start);

// TODO - what the - is this?
const maxSubsequence = (nums: number[], k: number): number[] => {
  let indices = nums.map((_, i) => i);
  const quickSelect = (left: number, right: number) => {
    let pivot = right;
    let [i, j] = [left - 1, left];

    while (j < pivot) {
      if (nums[indices[j]] <= nums[indices[pivot]]) {
        ++i;
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      ++j;
    }

    ++i;
    [indices[i], indices[j]] = [indices[j], indices[i]];
    return i;
  };

  let index: number;
  let [left, right] = [0, nums.length - 1];
  while (true) {
    index = quickSelect(left, right);
    if (index === nums.length - k) break;

    if (index < nums.length - k) left = index + 1;
    else right = index - 1;
  }

  let headempty = new Array(nums.length).fill(false);
  range(index, nums.length).forEach((i) => headempty[indices[i]] = true);
  return range(0, nums.length).filter((i) => headempty[i]).map((i) => nums[i]);
};

describe("subsequence of length k with the largest sum", () => {
  it("case 1", () => {
    expect(maxSubsequence([2, 1, 3, 3], 2)).toEqual([3, 3]);
  });

  it("case 2", () => {
    expect(maxSubsequence([-1, -2, 3, 4], 3)).toEqual([-1, 3, 4]);
  });

  it("case 3", () => {
    expect(maxSubsequence([3, 4, 3, 3], 2)).toEqual([4, 3]);
  });

  it("case 4", () => {
    expect(maxSubsequence([63, -74, 61, -17, -55, -59, -10, 2, -60, -65], 9))
      .toEqual([63, 61, -17, -55, -59, -10, 2, -60, -65]);
  });
});