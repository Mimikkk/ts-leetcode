import { exercise } from "@shared/utilities/exercise.ts";

const isArithmetic = (nums: number[]): boolean => {
  const r = nums[1] - nums[0];

  for (let i = 2; i < nums.length; ++i) if (nums[i] - nums[i - 1] !== r) return false;
  return true;
};

const checkArithmeticSubarrays = (nums: number[], left: number[], right: number[]): boolean[] =>
  left.map((_, i) => isArithmetic(nums.slice(left[i], right[i] + 1).sort((a, b) => a - b)));

exercise(checkArithmeticSubarrays, [
  [
    [
      [4, 6, 5, 9, 3, 7],
      [0, 0, 2],
      [2, 3, 5],
    ],
    [true, false, true],
  ],
  [
    [
      [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
      [0, 1, 6, 4, 8, 7],
      [4, 4, 9, 7, 9, 10],
    ],
    [false, true, false, false, true, true],
  ],
]);
