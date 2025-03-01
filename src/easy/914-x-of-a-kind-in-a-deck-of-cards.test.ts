import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const createCounter = (nums: number[]) => {
  const counter: Record<number, number> = {};
  nums.forEach((n) => (counter[n] = (counter[n] || 0) + 1));
  return counter;
};

const gcd = (divisor: number, dividend: number): number => (divisor ? gcd(dividend % divisor, divisor) : dividend);

const hasGroupsSizeX = (deck: number[]) => Object.values(createCounter(deck)).reduce(gcd) !== 1;

describe("has groups size", () => {
  it("case 1", () => {
    expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toEqual(true);
  });

  it("case 2", () => {
    expect(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])).toEqual(false);
  });
});