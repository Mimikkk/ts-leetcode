import { exercise } from "@shared/utilities/exercise";

const maximizeSum = (nums: number[], k: number): number => {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) if (nums[i] > max) max = nums[i];

  return ((max + max + k - 1) / 2) * k;
};
exercise(maximizeSum, [[[[1, 2, 3, 4, 5], 3], 18]]);
