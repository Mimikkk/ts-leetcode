import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const containsDuplicate = (nums: number[]): boolean => {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
};

describe("217 - contains duplicate", () => {
  it("should pass", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
    expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
  });
});
