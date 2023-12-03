import { exercise } from "@shared/utilities/exercise.js";

const findNonMinOrMax = (nums: number[]): number => (nums.length < 3 ? -1 : nums.sort((a, b) => a - b)[1]);

exercise(findNonMinOrMax, [
  [[[3, 2, 1, 4]], 2],
  [[[1, 2]], -1],
]);
