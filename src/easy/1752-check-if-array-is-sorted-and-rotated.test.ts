export {};

const isSorted = (nums: number[]) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) return false;
  }
  return true;
};
const check = (nums: number[]): boolean => {
  let count = 0;
  while (count !== nums.length) {
    nums.push(nums.shift()!);
    if (isSorted(nums)) return true;
    ++count;
  }
  return false;
};

describe("is sorted and rotated", () => {
  it("case 1", () => {
    expect(check([1, 2, 3, 4, 5, 6, 7])).toEqual(true);
    expect(check([7, 1, 2, 3, 4, 5, 6])).toEqual(true);
  });
});