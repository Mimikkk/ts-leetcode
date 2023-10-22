export {};

const merge = (nums1: number[], m: number, nums2: number[], n: number) => {
  let i = m-- + n--;
  while (n >= 0) nums1[--i] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
};

describe("88 - merge sorted array", () => {
  it("should pass", () => {
    let nums1 = [1, 2, 3, 0, 0, 0];
    merge(nums1, 3, [2, 5, 6], 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("should pass", () => {
    let nums1 = [1];
    merge(nums1, 1, [0], 0);
    expect(nums1).toEqual([1]);
  });
});
