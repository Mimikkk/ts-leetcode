import { exercise } from "@shared/utilities/exercise.js";

const isInverse = (a: string, b: string) => {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) if (a[i] !== b[b.length - i - 1]) return false;
  return true;
};

const maximumNumberOfStringPairs = (words: string[]): number => {
  let count = 0;

  for (let i = 0; i < words.length; ++i) {
    for (let j = i + 1; j < words.length; ++j) {
      if (isInverse(words[i], words[j])) ++count;
    }
  }

  return count;
};

exercise(maximumNumberOfStringPairs, [
  [[["cd", "ac", "dc", "ca", "zz"]], 2],
  [[["ab", "ba", "cc"]], 1],
]);
