import { exercise } from "@shared/utilities/exercise.js";

const countPairs = (nums: number[], target: number): number => {
  let n = nums.length;
  let count = 0;
  for (let i = 0; i < n - 1; ++i) for (let j = i + 1; j < n; ++j) if (nums[i] + nums[j] < target) ++count;
  return count;
};

exercise(countPairs, [
  [[[-1, 1, 2, 3, 1], 2], 3],
  [[[-6, 2, 5, -2, -7, -1, 3], -2], 10],
]);
