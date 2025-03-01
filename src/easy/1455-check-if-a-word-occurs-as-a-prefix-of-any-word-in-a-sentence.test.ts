import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const isPrefixOfWord = (sentence: string, searchWord: string): number =>
  sentence.split(" ").findIndex((word) => word.startsWith(searchWord)) + 1 || -1;

describe("is prefix of word", () => {
  it("case 1", () => {
    expect(isPrefixOfWord("i love eating burger", "burg")).toBe(4);
  });

  it("case 2", () => {
    expect(isPrefixOfWord("this problem is an easy problem", "pro")).toBe(2);
  });

  it("case 3", () => {
    expect(isPrefixOfWord("i am tired", "you")).toBe(-1);
  });
});
