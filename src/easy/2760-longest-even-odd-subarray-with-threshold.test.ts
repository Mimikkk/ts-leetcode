import { exercise } from "@shared/utilities/exercise.js";

const longestAlternatingSubarray = (nums: number[], threshold: number): number => {
  let longest = 0;

  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    if (nums[i] % 2 == 1) continue;

    combination: for (let j = i; j < n; ++j) {
      for (let k = i; k <= j; ++k) if (nums[k] > threshold) continue combination;
      for (let k = i; k < j; ++k) if (nums[k] % 2 == nums[k + 1] % 2) continue combination;

      const length = j - i + 1;
      if (length > longest) longest = length;
    }
  }
  return longest;
};

exercise(longestAlternatingSubarray, [
  [[[3, 2, 5, 4], 5], 3],
  [[[1, 2], 2], 1],
  [[[2, 3, 4, 5], 4], 3],
]);
