import { exercise } from "@shared/utilities/exercise.js";

const minOperations = (n: number): number => (~~(n / 2) + (n & 1)) * ~~(n / 2);

exercise(minOperations, [
  [[3], 2],
  [[5], 6],
  [[7], 12],
  [[9], 20],
  [[2], 1],
  [[4], 4],
  [[6], 9],
  [[8], 16],
  [[10], 25],
  [[12], 36],
]);
