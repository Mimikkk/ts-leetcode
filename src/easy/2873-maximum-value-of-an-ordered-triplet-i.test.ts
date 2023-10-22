import { expect } from "vitest";

export {};

function maximumTripletValue(nums: [number, number, ...number[]]): number {
  const il0 = nums.length;
  const il1 = nums.length - 1;
  const il2 = nums.length - 2;

  let max = 0;
  for (let i = 0; i < il2; ++i) {
    for (let j = i + 1; j < il1; ++j) {
      for (let k = j + 1; k < il0; ++k) {
        const value = (nums[i] - nums[j]) * nums[k];
        if (value > max) max = value;
      }
    }
  }

  return max;
}

describe("peak index in mountain array", () => {
  it("case 1", () => {
    expect(maximumTripletValue([12, 6, 1, 2, 7])).toBe(77);
  });

  it("case 2", () => {
    expect(maximumTripletValue([1, 10, 3, 4, 19])).toBe(133);
  });
});
