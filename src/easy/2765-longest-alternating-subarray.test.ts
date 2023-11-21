import { exercise } from "@shared/utilities/exercise";

const alternatingSubarray = (nums: number[]): number => {
  const n = nums.length;
  let longest = -1;

  for (let i = 0; i < n - 1; ++i) {
    const first = nums[i];
    const second = nums[i + 1];

    if (second - first !== 1) continue;
    combination: for (let j = i + 1; j < n; ++j) {
      for (let k = i; k <= j; k += 2) if (nums[k] !== first) continue combination;
      for (let k = i + 1; k <= j; k += 2) if (nums[k] !== second) continue combination;

      const length = j - i + 1;
      if (length > longest) longest = length;
    }
  }

  return longest;
};

exercise(alternatingSubarray, [
  // [[[2, 3, 4, 3, 4]], 4],
  // [[[4, 5, 6]], 2],
  // [[[21, 9, 5]], -1],
  [[[14, 30, 29, 49, 3, 23, 44, 21, 26, 52]], -1],
  // [[[3]], -1],
]);
