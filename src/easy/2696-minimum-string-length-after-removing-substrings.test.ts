import { exercise } from "@shared/utilities/exercise.ts";

const substrings = ["AB", "CD"];
const minLength = (s: string): number => {
  const characters = [...s];

  for (let i = s.length - 1; i >= 0; --i) {
    next_substring: for (let k = substrings.length - 1; k >= 0; --k) {
      let start = i;

      for (let j = substrings[k].length - 1; j >= 0; --j) {
        if (characters[start] !== substrings[k][j]) continue next_substring;
        --start;
      }

      characters.splice(start + 1, substrings[k].length);
    }
  }

  return characters.length;
};

exercise(minLength, [
  [["ABFCACDB"], 2],
  [["ACBBD"], 5],
  [["ABAB"], 0],
  [["AABB"], 0],
  [["AACDBB"], 0],
]);
