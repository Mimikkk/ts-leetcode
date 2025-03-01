import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const sum = (...nums: number[]) => nums.reduce((a, b) => a + b, 0);
const pivotIndex = (nums: number[]): number => {
  let [left, right] = [0, sum(...nums)];

  return nums.findIndex((num) => {
    if (right - left === num) return true;
    left += num;
    right -= num;
  });
};

describe("pivot index", () => {
  it("case 1", () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toEqual(3);
  });

  it("case 2", () => {
    expect(pivotIndex([1, 2, 3])).toEqual(-1);
  });

  it("case 3", () => {
    expect(pivotIndex([2, 1, -1])).toEqual(0);
  });
});