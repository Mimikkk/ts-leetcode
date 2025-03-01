import { exercise } from "@shared/utilities/exercise.ts";

const minimumCost = (nums: number[]): number => {
  const n = nums.length;

  let min = Infinity;
  for (let i = 1; i < n; ++i) {
    for (let k = i + 1; k < n; ++k) {
      const cost = nums[0] + nums[i] + nums[k];

      if (cost < min) min = cost;
    }
  }

  return min;
};

exercise(minimumCost, [
  [[[1, 2, 3, 12]], 6],
  [[[5, 4, 3]], 12],
  [[[10, 3, 1, 1]], 12],
]);
