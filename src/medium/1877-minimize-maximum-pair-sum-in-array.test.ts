import { exercise } from "@shared/utilities/exercise.ts";

const minPairSum = (nums: number[]): number =>
  Math.max(
    ...nums
      .sort((a, b) => a - b)
      .slice(0, nums.length / 2)
      .map((n, i) => n + nums[nums.length - i - 1]),
  );

exercise(minPairSum, [
  [[[3, 5, 2, 3]], 7],
  [[[3, 5, 4, 2, 4, 6]], 8],
]);
