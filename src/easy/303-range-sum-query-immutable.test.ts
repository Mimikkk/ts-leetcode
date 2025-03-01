import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


class NumArray {
  ranges: number[];

  constructor(nums: number[]) {
    this.ranges = Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
      this.ranges[i] = (this.ranges[i - 1] || 0) + nums[i];
    }
  }

  sumRange = (left: number, right: number): number => this.ranges[right] - (this.ranges[left - 1] || 0);
}

describe("NumArray", () => {
  it("should be able to be created", () => {
    expect(new NumArray([-2, 0, 3, -5, 2, -1])).toBeDefined();
  });

  it("should be able to sumRange", () => {
    expect(new NumArray([-2, 0, 3, -5, 2, -1]).sumRange(0, 2)).toEqual(1);
    expect(new NumArray([-2, 0, 3, -5, 2, -1]).sumRange(2, 5)).toEqual(-1);
    expect(new NumArray([-2, 0, 3, -5, 2, -1]).sumRange(0, 5)).toEqual(-3);
  });
});