import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const reverseVowels = (s: string): string => {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const result = [...s];

  let left = 0;
  let right = result.length - 1;

  while (left < right) {
    if (!vowels.has(result[left])) ++left;
    else if (!vowels.has(result[right])) --right;
    else {
      [result[left], result[right]] = [result[right], result[left]];
      ++left;
      --right;
    }
  }

  return result.join("");
};

describe("Reverse vowels", () => {
  it("should revert vowels", () => {
    expect(reverseVowels("hello")).toEqual("holle");
  });

  it("should revert vowels", () => {
    expect(reverseVowels("leetcode")).toEqual("leotcede");
  });
});