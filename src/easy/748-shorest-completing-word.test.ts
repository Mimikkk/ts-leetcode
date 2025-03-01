import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const shortestCompletingWord = (licensePlate: string, words: string[]): string => {
  licensePlate = licensePlate.toLowerCase().replace(/[ 0-9]/g, "");
  words.sort((a, b) => a.length - b.length);

  for (let word of words) {
    let plate = licensePlate;
    for (let char of word) plate = plate.replace(char, "");
    if (!plate) return word;
  }

  return "";
};

describe("shortest completing word", () => {
  it("case 1", () => {
    expect(shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])).toBe("steps");
  });

  it("case 2", () => {
    expect(shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])).toBe("pest");
  });
});