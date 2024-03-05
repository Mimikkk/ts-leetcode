import { exercise } from "@shared/utilities/exercise.js";

const resultArray = (nums: number[]): number[] => {
  const arr1: number[] = [nums[0]];
  const arr2: number[] = [nums[1]];

  for (let i = 2, it = nums.length; i < it; ++i) {
    if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) arr1.push(nums[i]);
    else arr2.push(nums[i]);
  }

  return arr1.concat(arr2);
};

exercise(resultArray, [
  [[[2, 1, 3]], [2, 3, 1]],
  [[[5, 4, 3, 8]], [5, 3, 4, 8]],
]);
