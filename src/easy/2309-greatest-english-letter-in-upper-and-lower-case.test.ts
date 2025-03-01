import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


function greatestLetter(s: string): string {
  let letters = [...new Set(s)].sort((a, b) => a.localeCompare(b));

  for (let i = letters.length - 1; i >= 0; --i) {
    if (letters[i + 1] === letters[i].toUpperCase()) return letters[i + 1];
  }

  return "";
}

describe("greatest letter", () => {
  it("case 1", () => {
    expect(greatestLetter("aAbB")).toEqual("B");
  });
});
