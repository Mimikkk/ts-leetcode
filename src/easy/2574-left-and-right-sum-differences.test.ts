import { exercise } from "@shared/utilities/exercise";

const crawlingSum = (nums: number[]): number[] => {
  const sums = Array(nums.length);

  sums[0] = nums[0];
  for (let i = 1; i < nums.length; ++i) sums[i] = sums[i - 1] + nums[i];

  return sums;
};

const leftRightDifference = (nums: number[]): number[] => {
  const result = Array(nums.length);

  const sums = crawlingSum(nums);
  for (let i = 0; i < nums.length; ++i) {
    const leftsum = sums[i - 1] ?? 0;
    const rightsum = sums[nums.length - 1] - sums[i];

    result[i] = Math.abs(leftsum - rightsum);
  }

  return result;
};

exercise(leftRightDifference, [
  [[[10, 4, 8, 3]], [15, 1, 11, 22]],
  [[[1]], [0]],
]);
