import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const longestPalindrome = (s: string): string => {
  let [start, max] = [0, 1];

  for (let i = 0; i < s.length; i++) {
    let right = i;
    while (right < s.length && s[i] === s[right]) ++right;
    let left = i - 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) --left, ++right;

    let len = right - left - 1;
    if (len > max) [start, max] = [left + 1, len];
  }

  return s.slice(start, start + max);
};

describe("longest palindrome", () => {
  it("case 1", () => {
    expect(longestPalindrome("babad")).toEqual("bab");
  });

  it("case 2", () => {
    expect(longestPalindrome("cbbd")).toEqual("bb");
  });
});
