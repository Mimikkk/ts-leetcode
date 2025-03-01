import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const vowels = "aeiouAEIOU";
const countVowels = (s: string): number => {
  let count = 0;
  for (const letter of s) if (vowels.includes(letter)) ++count;
  return count;
};
const half = (s: string): [string, string] => {
  const half = s.length / 2;
  return [s.slice(0, half), s.slice(half)];
};

const halvesAreAlike = (s: string) => {
  const [c1, c2] = half(s).map(countVowels);
  return c1 === c2;
};

describe("are halvesAreAlike", () => {
  it("case 1", () => {
    expect(halvesAreAlike("abce")).toBe(true);
  });
});
