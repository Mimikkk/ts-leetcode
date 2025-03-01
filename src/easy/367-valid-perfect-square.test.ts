import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const isPerfectSquare = (num: number): boolean => {
  if (num === 1) return true;

  let left = 1;
  let right = num;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const square = mid * mid;
    if (square === num) return true;

    if (square > num) right = mid - 1;
    else left = mid + 1;
  }

  return false;
};

describe("Valid Perfect Square", () => {
  it("it returns true for perfect squares", () => {
    expect(isPerfectSquare(16)).toBe(true);
  });

  it("it returns false for non-perfect squares", () => {
    expect(isPerfectSquare(14)).toBe(false);
  });
});
