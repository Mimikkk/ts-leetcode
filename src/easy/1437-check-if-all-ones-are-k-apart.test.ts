import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const kLengthApart = (nums: number[], k: number): boolean => {
  let prev = -k - 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (i - prev <= k) return false;
      prev = i;
    }
  }

  return true;
};

describe("are k aparrt", () => {
  it("case 1", () => {
    expect(kLengthApart([1, 0, 0, 1, 0, 1], 1)).toBeTruthy();
  });

  it("case 2", () => {
    expect(kLengthApart([1, 0, 0, 1, 0, 1], 2)).toBeFalsy();
  });
});