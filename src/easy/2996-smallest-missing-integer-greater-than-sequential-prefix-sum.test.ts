import { exercise } from "@shared/utilities/exercise.ts";

const missingInteger = (nums: number[]): number => {
  let sum = nums[0];
  for (let i = 1; i < nums.length && nums[i] === nums[i - 1] + 1; ++i) {
    sum += nums[i];
  }

  while (nums.includes(sum)) ++sum;
  return sum;
};

exercise(missingInteger, [
  [[[1, 2, 3, 2, 5]], 6],
  [[[3, 4, 5, 1, 12, 14, 13]], 15],
  [[[18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 9]], 253],
  [[[14, 9, 6, 9, 7, 9, 10, 4, 9, 9, 4, 4]], 15],
]);
