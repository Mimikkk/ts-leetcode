import { exercise } from "@shared/utilities/exercise.js";

const triangularSum = (nums: number[]): number => {
  const n = nums.length;

  for (let i = n - 1; i > 0; --i) {
    for (let j = 0; j < i; ++j) {
      nums[j] = (nums[j] + nums[j + 1]) % 10;
    }
  }

  return nums[0];
};

exercise(triangularSum, [
  [[[1, 2, 3, 4, 5]], 8],
  [[[5, 4, 3]], 6],
  [[[5]], 5],
]);
