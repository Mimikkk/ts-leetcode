import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const isOneBitCharacter = (bits: number[]): boolean => {
  for (let i = 0; i < bits.length; i++) {
    if (i == bits.length - 1) return true;

    if (bits[i] == 1) ++i;
  }
  return false;
};

describe("is one bit character", () => {
  it("case 1", () => {
    expect(isOneBitCharacter([1, 0, 0])).toBe(true);
  });

  it("case 2", () => {
    expect(isOneBitCharacter([1, 1, 1, 0])).toBe(false);
  });
});