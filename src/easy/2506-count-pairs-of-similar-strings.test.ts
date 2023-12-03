import { exercise } from "@shared/utilities/exercise.js";

const similarPairs = (words: string[]): number => {
  let sets = words.map((x) => new Set(x)).map((x) => [...x].sort().join(""));

  let count = 0;
  for (let i = 0; i < words.length - 1; ++i) {
    for (let j = i + 1; j < words.length; ++j) {
      if (sets[i] === sets[j]) ++count;
    }
  }

  return count;
};

exercise(similarPairs, [
  [[["aba", "aabb", "abcd", "bac", "aabc"]], 2],
  [[["aabb", "ab", "ba"]], 3],
  [[["nba", "cba", "dba"]], 0],
]);
