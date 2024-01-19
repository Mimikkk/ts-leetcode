import { exercise } from "@shared/utilities/exercise.js";

const partitionString = (s: string): number => {
  const unique = new Set<string>();

  let count = 1;
  for (let i = 0; i < s.length; ++i) {
    const character = s[i];
    if (unique.has(character)) {
      unique.clear();
      ++count;
    }
    unique.add(character);
  }

  return count;
};

exercise(partitionString, [
  [["abacaba"], 4],
  [["ssssss"], 6],
  [["a"], 1],
]);
