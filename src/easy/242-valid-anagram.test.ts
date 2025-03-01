import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const isAnagram = (s: string, t: string): boolean => {
  const map: Record<string, number> = {};

  for (const char of s) map[char] = (map[char] || 0) + 1;

  for (const char of t) {
    if (!map[char]) return false;
    map[char] -= 1;
  }

  return Object.values(map).every((val) => val === 0);
};

describe("242-valid-anagram", () => {
  it("anagram is valid", () => {
    expect(isAnagram("anagram", "nagaram")).toEqual(true);
  });

  it("anagram is not valid", () => {
    expect(isAnagram("rat", "car")).toEqual(false);
  });
});