export {};

const search = (nums: number[], target: number): number => {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};

describe("binary search", () => {
  it("should return the index of the target", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toEqual(4);
  });

  it("should return -1 if the target is not found", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1);
  });

  it("should return the index of the target if the target is found", () => {
    expect(search([-1, 0, 3, 5, 9, 12], -1)).toEqual(0);
  });

  it("should return the index of the target if the target is found", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 0)).toEqual(1);
  });
});