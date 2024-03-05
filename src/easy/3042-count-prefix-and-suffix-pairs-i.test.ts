import { exercise } from "@shared/utilities/exercise.js";

const isPrefixAndSuffix = (fix: string, word: string) => word.startsWith(fix) && word.endsWith(fix);

const countPrefixSuffixPairs = (words: string[]): number => {
  let count = 0;

  for (let i = 0, it = words.length; i < it; ++i) {
    for (let j = i + 1; j < it; ++j) {
      if (isPrefixAndSuffix(words[i], words[j])) ++count;
    }
  }

  return count;
};

exercise(countPrefixSuffixPairs, [
  [[["a", "aba", "ababa", "aa"]], 4],
  [[["pa", "papa", "ma", "mama"]], 2],
  [[["abab", "ab"]], 0],
]);
