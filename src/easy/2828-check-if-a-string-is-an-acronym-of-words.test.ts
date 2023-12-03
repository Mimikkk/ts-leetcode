import { exercise } from "@shared/utilities/exercise.js";

const isAcronym = (words: string[], s: string): boolean => {
  if (words.length !== s.length) return false;

  for (let i = 0; i < s.length; ++i) if (words[i][0] !== s[i]) return false;
  return true;
};

exercise(isAcronym, [
  [[["cd", "ac", "dc", "ca", "zz"], "z"], false],
  [[["a", "a", "a"], "aaa"], true],
]);
