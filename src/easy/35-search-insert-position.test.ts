import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const searchInsert = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

describe("35 - search insert position", () => {
  it("should pass the first case", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  it("should pass the second case", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });

  it("should pass the third case", () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });
});
