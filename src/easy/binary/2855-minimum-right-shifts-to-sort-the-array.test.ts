import { expect } from "vitest";

export {};

const minimumRightShifts = (nums: number[]): number => {
  const n = nums.length;

  let maxAt = 0;
  for (let i = 0; i < n; ++i) if (nums[i] > nums[maxAt]) maxAt = i;

  let k = (maxAt + 2) % n;
  while (k !== maxAt) {
    const a = nums[(n + k - 1) % n];
    const b = nums[k % n];

    if (a > b) return -1;
    k = (k + 1) % n;
  }

  return nums.length - 1 - maxAt;
};

describe("2855. sum", () => {
  it("case 1", () => {
    expect(minimumRightShifts([3, 4, 5, 1, 2])).toBe(2);
  });

  it("case 2", () => {
    expect(minimumRightShifts([1, 3, 5])).toBe(0);
  });

  it("case 3", () => {
    expect(minimumRightShifts([2, 1, 4])).toBe(-1);
  });

  it("case 4", () => {
    expect(minimumRightShifts([68, 12])).toBe(1);
  });

  it("case 5", () => {
    expect(minimumRightShifts([12])).toBe(0);
  });

  it("case 6", () => {
    expect(minimumRightShifts([12, 13])).toBe(0);
  });

  it("case 7", () => {
    expect(minimumRightShifts([29, 30, 88, 28, 62])).toBe(-1);
  });

  it("case 8", () => {
    expect(minimumRightShifts([29, 30, 88, 89, 62])).toBe(-1);
  });
});
