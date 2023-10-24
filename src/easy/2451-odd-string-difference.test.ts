import { expect } from "vitest";
export {};

const differenceAt = (a: string, i: number): number => a.charCodeAt(i + 1) - a.charCodeAt(i);
const findDifferences = (word: string): number[] => {
  const differences = [];
  for (let i = 0; i < word.length - 1; ++i) differences.push(differenceAt(word, i));
  return differences;
};
const areEqual = (a: number[], b: number[]): boolean => a.every((_, i) => a[i] === b[i]);
const oddString = (words: string[]): string => {
  const differences = findDifferences(words[0]);

  for (let i = 1; i < words.length; ++i) {
    if (areEqual(differences, findDifferences(words[i]))) continue;
    return i === 1 && !areEqual(differences, findDifferences(words[i + 1])) ? words[0] : words[i];
  }

  return "";
};

describe("2451", () =>
  it.each([
    {
      words: ["adc", "wzy", "abc"],
      output: "abc",
    },
    {
      words: ["aaa", "bob", "ccc", "ddd"],
      output: "bob",
    },
    {
      words: ["bob", "aaa", "ccc", "ddd"],
      output: "bob",
    },
  ])("$words -> $output", ({ words, output }) => expect(oddString(words)).toBe(output)));
