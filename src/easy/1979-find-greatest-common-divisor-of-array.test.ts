import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const gcd = (x: number, y: number): number => (!x ? y : gcd(y % x, x));
const findGCD = (nums: number[]): number => gcd(Math.min(...nums), Math.max(...nums));

describe("gcd of array", () => {
  it("case 1", () => {
    expect(findGCD([2, 4, 6, 8])).toBe(2);
  });

  it("case 2", () => {
    expect(findGCD([2, 5, 6, 9, 10])).toBe(2);
  });

  it("case 3", () => {
    expect(findGCD([3, 9, 27, 81])).toBe(3);
  });
});