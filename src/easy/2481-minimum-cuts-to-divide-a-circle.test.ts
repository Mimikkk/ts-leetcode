import { exercise } from "@shared/utilities/exercise.js";

export {};

const numberOfCuts = (n: number): number => {
  if (n === 1) return 0;
  return n % 2 ? n : n / 2;
};

exercise(numberOfCuts, [
  [[0], 0],
  [[1], 0],
  [[4], 2],
  [[3], 3],
]);
