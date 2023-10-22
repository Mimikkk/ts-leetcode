export {};

const findDifference = (
  nums1: number[],
  nums2: number[],
): [number[], number[]] => {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);

  return [[...s1].filter((x) => !s2.has(x)), [...s2].filter((x) => !s1.has(x))];
};

describe("find diff", () => {
  it("should return the difference of two arrays", () => {
    expect(findDifference([1, 2, 3], [2, 4, 6])).toEqual([
      [1, 3],
      [4, 6],
    ]);
  });
});