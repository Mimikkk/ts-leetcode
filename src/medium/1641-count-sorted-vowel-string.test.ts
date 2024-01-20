import { exercise } from "@shared/utilities/exercise.js";

const countVowelStrings = (n: number): number => {
  const memory = [1, 2, 3, 4, 5];

  for (let i = 1; i < n; ++i) for (let j = 1; j < 5; ++j) memory[j] += memory[j - 1];

  return memory[4];
};

exercise(countVowelStrings, [
  [[1], 5],
  [[2], 15],
]);
