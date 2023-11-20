import { exercise } from "@shared/utilities/exercise";

const maximumStrongPairXor = (nums: number[]): number => {
  let max = 0;

  for (let i = 0; i < nums.length - 1; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (Math.abs(nums[i] - nums[j]) > Math.min(nums[i], nums[j])) continue;
      const value = nums[i] ^ nums[j];

      if (value > max) max = value;
    }
  }

  return max;
};

exercise(maximumStrongPairXor, [
  [[[1, 2, 3, 4, 5]], 7],
  [[[10, 100]], 0],
]);
