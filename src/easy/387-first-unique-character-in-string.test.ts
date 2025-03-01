import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const firstUniqChar = (s: string): number => {
  const characters: Record<string, number> = {};

  for (const char of s) characters[char] = (characters[char] || 0) + 1;

  for (let i = 0; i < s.length; i++) if (characters[s[i]] === 1) return i;

  return -1;
};

describe("firstUniqChar", () => {
  it("it returns the index of the first unique character", () => {
    expect(firstUniqChar("leetcode")).toEqual(0);
  });

  it("it returns -1 if there is no unique character", () => {
    expect(firstUniqChar("loveleetcode")).toEqual(2);
  });

  it("it returns -1 if the string is empty", () => {
    expect(firstUniqChar("")).toEqual(-1);
  });
});
