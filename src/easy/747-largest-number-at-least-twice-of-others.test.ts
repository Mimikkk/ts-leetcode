export {};

const dominantIndex = (nums: number[]): number => {
  const largest = Math.max(...nums);
  let index = nums.indexOf(largest);

  for (let i = 0; i < nums.length; i++) {
    if (i === index) continue;
    if (nums[i] * 2 > largest) return -1;
  }

  return index;
};

describe("dominant", () => {
  it("case 1", () => {
    expect(dominantIndex([3, 6, 1, 0])).toBe(1);
  });

  it("case 2", () => {
    expect(dominantIndex([1, 2, 3, 4])).toBe(-1);
  });
});