export {};

const intersection = (nums1: number[], nums2: number[]): number[] => {
  const set = new Set(nums1);

  return [...new Set(nums2.filter((num) => set.has(num)))];
};

describe("Intersection of Two Arrays", () => {
  it("case 1", () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
  });

  it("case 2", () => {
    expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
  });
});