import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const MorseCode = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];
const morse = (s: string) => [...s].map((c) => MorseCode[c.charCodeAt(0) - 97]).join("");
const uniqueMorseRepresentations = (words: string[]): number => [...new Set(words.map(morse))].length;

describe("unique morse code words", () => {
  it("case 1", () => {
    expect(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])).toEqual(2);
  });
});
