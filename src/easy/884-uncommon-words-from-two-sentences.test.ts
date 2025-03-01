import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const createCounter = (words: string[]) => {
  const counter: Record<string, number> = {};
  words.forEach((w) => (counter[w] = (counter[w] || 0) + 1));
  return counter;
};

const first = <T, Y>([e]: [T, Y]) => e;
const once = <T>([_, v]: [T, number]) => v === 1;
const words = (sentence: string) => sentence.split(/ +/);

const uncommonFromSentences = (s1: string, s2: string): string[] =>
  Object.entries(createCounter([s1, s2].flatMap(words)))
    .filter(once)
    .map(first);

describe("uncommon", () => {
  it("case 1", () => {
    expect(uncommonFromSentences("this apple is sweet", "this apple is sour")).toEqual(["sweet", "sour"]);
  });
});
