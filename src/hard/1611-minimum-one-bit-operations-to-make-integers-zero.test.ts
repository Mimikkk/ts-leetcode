import { exercise } from "@shared/utilities/exercise.ts";

const minimumOneBitOperations = (n: number): number => {
  let count = 0;
  for (let i = 0; i < 32; ++i) {
    if (n & (1 << i)) count = (1 << (i + 1)) - 1 - count;
  }
  return count;
};

exercise(minimumOneBitOperations, [
  [[0], 0],
  [[3], 2],
  [[6], 4],
]);
