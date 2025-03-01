import { exercise } from "@shared/utilities/exercise.ts";

const isStrictlyIncreasing = (nums: number[], from: number, to: number) => {
  let previous = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i >= from && i <= to) continue;

    if (nums[i] <= previous) return false;
    previous = nums[i];
  }

  return true;
};

const incremovableSubarrayCount = (nums: number[]): number => {
  let count = 0;

  for (let from = 0, n = nums.length; from < n; ++from) {
    for (let to = from; to < n; ++to) {
      if (isStrictlyIncreasing(nums, from, to)) ++count;
    }
  }

  return count;
};

exercise(incremovableSubarrayCount, [
  [[[1, 2, 3, 4]], 10],
  [[[6, 5, 7, 8]], 7],
  [[[8, 7, 6, 6]], 3],
]);
