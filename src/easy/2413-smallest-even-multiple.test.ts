
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const smallestEvenMultiple = (n: number): number => (n & 1 ? n << 1 : n);

describe("two out of three", () => {
  it("case 1", () => {
    expect(smallestEvenMultiple(5)).toBe(10);
  });

  it("case 2", () => {
    expect(smallestEvenMultiple(6)).toBe(6);
  });
});
