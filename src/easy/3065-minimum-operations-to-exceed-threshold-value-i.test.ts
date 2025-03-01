import { exercise } from "@shared/utilities/exercise.ts";

const minOperations = (nums: number[], k: number): number => {
  let count = 0;

  for (let i = 0, it = nums.length; i < it; ++i) {
    if (nums[i] < k) ++count;
  }

  return count;
};

exercise(minOperations, [
  [[[2, 11, 10, 1, 3], 10], 3],
  [[[1, 1, 2, 4, 9], 1], 0],
  [[[1, 1, 2, 4, 9], 9], 4],
]);
