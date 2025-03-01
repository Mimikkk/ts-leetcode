import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const desc = (a: number, b: number) => b - a;
const maxProduct = (nums: number[]): number => {
  const [a, b] = nums.sort(desc);

  return (a - 1) * (b - 1);
};

describe("max product of two elements in an array", () => {
  it("case 1", () => {
    expect(maxProduct([3, 4, 5, 2])).toBe(12);
  });

  it("case 2", () => {
    expect(maxProduct([1, 5, 4, 5])).toBe(16);
  });

  it("case 2", () => {
    expect(maxProduct([3, 7])).toBe(12);
  });
});