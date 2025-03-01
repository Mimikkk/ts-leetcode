import { exercise } from "@shared/utilities/exercise.ts";

const getLongestSubsequence = (words: string[], groups: (0 | 1)[]): string[] =>
  words.reduce<string[]>((acc, word, index) => {
    if (groups[index] !== groups[index - 1]) acc.push(word);

    return acc;
  }, []);

exercise(getLongestSubsequence, [
  [
    [
      ["e", "a", "b"],
      [0, 0, 1],
    ],
    ["e", "b"],
  ],
  [
    [
      ["a", "b", "c", "d"],
      [1, 0, 1, 1],
    ],
    ["a", "b", "c"],
  ],
]);
