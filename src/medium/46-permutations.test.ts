import { exercise } from "@shared/utilities/exercise.ts";

const swap = (nums: number[], i: number, j: number): void => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

const permute = (nums: number[]): number[][] => {
  const result: number[][] = [];

  const permute = (nums: number[], i: number): void => {
    if (i === nums.length) {
      result.push([...nums]);
      return;
    }

    for (let j = i; j < nums.length; ++j) {
      swap(nums, i, j);
      permute(nums, i + 1);
      swap(nums, i, j);
    }
  };
  permute(nums, 0);

  return result;
};

exercise(permute, [
  [
    [[1, 2, 3]],
    [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 2, 1],
      [3, 1, 2],
    ],
  ],
]);
