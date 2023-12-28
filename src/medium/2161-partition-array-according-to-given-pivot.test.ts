import { exercise } from "@shared/utilities/exercise.js";

const pivotArray = (nums: number[], pivot: number): number[] => {
  const result = [];

  for (let i = 0; i < nums.length; ++i) if (nums[i] < pivot) result.push(nums[i]);
  for (let i = 0; i < nums.length; ++i) if (nums[i] === pivot) result.push(nums[i]);
  for (let i = 0; i < nums.length; ++i) if (nums[i] > pivot) result.push(nums[i]);

  return result;
};

exercise(pivotArray, [
  [
    [[9, 12, 5, 10, 14, 3, 10], 10],
    [9, 5, 3, 10, 10, 12, 14],
  ],
  [
    [[-3, 4, 3, 2], 2],
    [-3, 2, 4, 3],
  ],
]);
