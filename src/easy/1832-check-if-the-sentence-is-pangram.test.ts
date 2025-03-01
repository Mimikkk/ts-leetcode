import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const checkIfPangram = (sentence: string) => new Set(sentence).size === 26;

describe("check if pangram", () => {
  it("case 1", () => {
    expect(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")).toBe(true);
  });

  it("case 2", () => {
    expect(checkIfPangram("leetcode")).toBe(false);
  });
});