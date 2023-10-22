export {};

const isPeak = (num: number, i: number, nums: number[]) => num > nums[i + 1] && num > nums[i - 1];

const peakIndexInMountainArray = (nums: number[]): number => nums.findIndex(isPeak);

describe("peak index in mountain array", () => {
  it("case 1", () => {
    expect(peakIndexInMountainArray([0, 1, 0])).toEqual(1);
  });

  it("case 2", () => {
    expect(peakIndexInMountainArray([0, 2, 1, 0])).toEqual(1);
  });
});