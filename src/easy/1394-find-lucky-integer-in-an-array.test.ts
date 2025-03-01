import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const createCounter = (nums: number[]) => {
  const counter: Record<number, number> = {};
  nums.forEach((n) => (counter[n] = (counter[n] || 0) + 1));
  return counter;
};

const uniq = <T>(arr: T[]) => [...new Set(arr)];
const first = <T>(arr: T[]) => arr[0];
const desc = (a: number, b: number) => b - a;

const findLucky = (arr: number[]): number => {
  const counter = createCounter(arr);

  return first(uniq(arr.filter((n) => n === counter[n])).sort(desc)) ?? -1;
};

describe("find lucky", () => {
  it("case 1", () => {
    expect(findLucky([2, 2, 3, 4])).toBe(2);
  });

  it("case 2", () => {
    expect(findLucky([4, 2, 3, 4])).toBe(-1);
  });

  it("case 3", () => {
    expect(findLucky([1, 2, 2, 3, 3, 3])).toBe(3);
  });

  it("case 4", () => {
    expect(findLucky([4, 3, 2, 2, 4, 1, 3, 4, 3])).toBe(3);
  });
});
