import { exercise } from "@shared/utilities/exercise.js";

const maximumCount = (nums: number[]): number => {
  let negativeCount = 0;
  let positiveCount = 0;

  for (let num of nums) {
    if (num < 0) ++negativeCount;
    else if (num > 0) ++positiveCount;
  }

  return negativeCount > positiveCount ? negativeCount : positiveCount;
};

exercise(maximumCount, [
  [[[-2, -1, -1, 1, 2, 3]], 3],
  [[[-3, -2, -1, 0, 0, 1, 2]], 3],
  [[[5, 20, 66, 1314]], 4],
]);
