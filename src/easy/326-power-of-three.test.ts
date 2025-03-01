import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const isPowerOfThree = (n: number): boolean => {
  if (n < 1) return false;
  while (!(n % 3)) n /= 3;
  return n === 1;
};

describe("326 - power of three", () => {
  it("#1", () => {
    expect(isPowerOfThree(27)).toBe(true);
  });

  it("#2", () => {
    expect(isPowerOfThree(0)).toBe(false);
  });

  it("#3", () => {
    expect(isPowerOfThree(9)).toBe(true);
  });

  it("#4", () => {
    expect(isPowerOfThree(45)).toBe(false);
  });
});
