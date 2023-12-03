import { exercise } from "@shared/utilities/exercise.js";

const minimumSum = (nums: number[]): number => {
  let sum: number | undefined;

  let numberCount = nums.length;
  for (let i = 0; i < numberCount; ++i) {
    for (let j = i + 1; j < numberCount; ++j) {
      for (let k = j + 1; k < numberCount; ++k) {
        if (nums[i] < nums[j] && nums[j] > nums[k]) {
          const value = nums[i] + nums[j] + nums[k];
          if (sum === undefined || value < sum) sum = value;
        }
      }
    }
  }

  return sum === undefined ? -1 : sum;
};

exercise(minimumSum, [
  [[[8, 6, 1, 5, 3]], 9],
  [[[5, 4, 8, 7, 10, 2]], 13],
  [[[6, 5, 4, 3, 4, 5]], -1],
]);
