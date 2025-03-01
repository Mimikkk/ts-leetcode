import { exercise } from "@shared/utilities/exercise.ts";

const distinctDifferenceArray = (nums: number[]): number[] => {
  const result = Array(nums.length);

  const distinct = new Set<number>();
  for (let i = 0; i < nums.length; ++i) {
    if (!distinct.has(nums[i])) distinct.add(nums[i]);
    result[i] = distinct.size;
  }

  distinct.clear();
  for (let i = nums.length - 1; i >= 0; --i) {
    result[i] -= distinct.size;
    if (!distinct.has(nums[i])) distinct.add(nums[i]);
  }

  return result;
};

exercise(distinctDifferenceArray, [
  [[[1, 2, 3, 4, 5]], [-3, -1, 1, 3, 5]],
  [[[3, 2, 3, 4, 2]], [-2, -1, 0, 2, 3]],
]);
