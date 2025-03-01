import { exercise } from "@shared/utilities/exercise.ts";

const maximumXOR = (nums: number[]): number => nums.reduce((acc, num) => acc | num, 0);

exercise(maximumXOR, [
  [[[3, 2, 4, 6]], 7],
  [[[1, 2, 3, 8, 2]], 11],
]);
