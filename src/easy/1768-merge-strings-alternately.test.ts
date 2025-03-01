import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const mergeAlternately = (word1: string, word2: string): string => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) result.push(word1[i++]);
    if (j < word2.length) result.push(word2[j++]);
  }

  return result.join("");
};

describe("interweave strings", () => {
  it("should return correct result", () => {
    expect(mergeAlternately("abc", "pqr")).toEqual("apbqcr");
  });
});