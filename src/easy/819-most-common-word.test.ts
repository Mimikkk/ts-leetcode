import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const createCounter = (s: string[], banned: string[]) =>
  s.reduce<Record<string, number>>((acc, c) => {
    if (banned.includes(c)) return acc;
    acc[c] = acc[c] + 1 || 1;
    return acc;
  }, {});

const compact = (s: string[]) => s.filter(Boolean);
const preprocess = (s: string) =>
  compact(
    s
      .replace(/[^a-zA-Z]/g, " ")
      .toLowerCase()
      .split(/ +/),
  );

const mostCommonWord = (paragraph: string, banned: string[]): string => {
  const counter = createCounter(preprocess(paragraph), banned);
  const max = Math.max(...Object.values(counter));

  return Object.keys(counter).find((k) => counter[k] === max) || "";
};

describe("most common word", () => {
  it("case 1", () => {
    expect(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])).toEqual("ball");
  });

  it("case 2", () => {
    expect(mostCommonWord("a.", [])).toEqual("a");
  });

  it("case 3", () => {
    expect(mostCommonWord("Bob. hIt, baLl", ["bob", "hit"])).toEqual("ball");
  });

  it("case 4", () => {
    expect(mostCommonWord("..Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])).toEqual("ball");
  });
});