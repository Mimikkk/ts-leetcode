import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const repeatedNTimes = (nums: number[]): number => {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) return num;
    set.add(num);
  }

  return -1;
};

describe("repeated n times", () => {
  it("case 1", () => {
    expect(repeatedNTimes([2, 1, 2])).toBe(2);
  });

  it("case 2", () => {
    expect(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])).toBe(5);
  });
});