import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const gcd = (x: number, y: number): number => (!(y % x) ? x : gcd(y % x, x));

const gcdOfStrings = (str1: string, str2: string): string =>
  str1 + str2 === str2 + str1 ? str1.slice(0, gcd(str1.length, str2.length)) : "";

describe("gcd of strings", () => {
  it("case 1", () => {
    expect(gcdOfStrings("ABABAB", "ABABAB")).toBe("ABABAB");
  });

  it("case 2", () => {
    expect(gcdOfStrings("ABABAB", "ABAB")).toBe("AB");
  });

  it("case 3", () => {
    expect(gcdOfStrings("", "")).toBe("");
  });

  it("case 4", () => {
    expect(gcdOfStrings("", "A")).toBe("");
  });

  it("case 5", () => {
    expect(gcdOfStrings("A", "A")).toBe("A");
  });
});