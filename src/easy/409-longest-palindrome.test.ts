import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const createCounter = (s: string) =>
  [...s].reduce<Record<string, number>>((acc, c) => {
    acc[c] = acc[c] + 1 || 1;
    return acc;
  }, {});

const isOdd = (n: number) => n % 2 === 1;
const longestPalindrome = (s: string): number => {
  const oddCount = Object.values(createCounter(s)).filter(isOdd).length;

  return s.length - oddCount + (oddCount > 0 ? 1 : 0);
};

describe("longestPalindrome", () => {
  it("it returns the length of the longest palindrome", () => {
    expect(longestPalindrome("babad")).toEqual(5);
  });

  it("it returns the length of the longest palindrome", () => {
    expect(longestPalindrome("abcef")).toEqual(1);
  });

  it("it returns the length of the longest palindrome", () => {
    expect(longestPalindrome("cbbd")).toEqual(3);
  });

  it("it returns the length of the longest palindrome", () => {
    expect(longestPalindrome("a")).toEqual(1);
  });

  it("it returns the length of the longest palindrome", () => {
    expect(longestPalindrome("bb")).toEqual(2);
  });

  it("it returns the length of the longest palindrome", () => {
    expect(longestPalindrome("babadada")).toEqual(8);
  });
});