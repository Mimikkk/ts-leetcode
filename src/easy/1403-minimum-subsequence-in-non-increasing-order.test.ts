import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const add = (arr: number[]) => arr.reduce((a, b) => a + b) ?? NaN;
const desc = (a: number, b: number) => b - a;

const minSubsequence = (nums: number[]): number[] => {
  const sum = add(nums);

  let bSum = 0;
  nums.sort(desc);
  const i = nums.findIndex((n) => (bSum += n) > sum / 2);
  return nums.slice(0, i + 1);
};

describe("min seq", () => {
  it("case 1", () => {
    expect(minSubsequence([4, 3, 10, 9, 8])).toEqual([10, 9]);
  });

  it("case 2", () => {
    expect(minSubsequence([4, 4, 7, 6, 7])).toEqual([7, 7, 6]);
  });
});