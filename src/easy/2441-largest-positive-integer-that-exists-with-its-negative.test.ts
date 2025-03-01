import { exercise } from '@shared/utilities/exercise.ts';

const findMaxK = (nums: number[]): number => {
  const set = new Set(nums);

  let max = -1;
  for (const num of nums) {
    if (set.has(-num) && set.has(num)) {
      let value = Math.abs(num);

      if (max < value) max = value;
    }
  }

  return max;
};

exercise(findMaxK, [
  [[[-1, 2, -3, 3]], 3],
  [[[-1, 10, 6, 7, -7, 1]], 7],
  [[[-10, 8, 6, 7, -2, -3]], -1],
]);

