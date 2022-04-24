export {};

const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (Math.abs(i - map.get(num)!) <= k) return true;
    map.set(num, i);
  }

  return false;
};

describe("219 - contains duplicate ii", () => {
  it("returns true if there are duplicate elements within k", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
  });

  it("returns false if there are no duplicate elements within k", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false);
  });

  it("returns true if there are no duplicate elements within k", () => {
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true);
  });
});
