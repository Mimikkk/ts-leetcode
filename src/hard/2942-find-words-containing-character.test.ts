import { exercise } from "@shared/utilities/exercise.js";

const findWordsContaining = (words: string[], target: string): number[] =>
  words.map((word, i) => (word.includes(target) ? i : null)).filter((i) => i !== null) as number[];

exercise(findWordsContaining, [
  [
    [["abc", "bcd", "aaaa", "cbc"], "a"],
    [0, 2],
  ],
  [
    [["leet", "code"], "e"],
    [0, 1],
  ],
  [[["abc", "bcd", "aaaa", "cbc"], "z"], []],
]);
