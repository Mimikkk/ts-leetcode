import { exercise } from "@shared/utilities/exercise.ts";
import { TreeNode } from "@shared/structures/index.ts";

const rearrangeArray = (nums: number[]): number[] => {
  const positives: number[] = [];
  const negatives: number[] = [];
  for (const n of nums) (n < 0 ? negatives : positives).push(n);

  const result = Array(nums.length);
  for (let i = 0; i < nums.length; i += 2) {
    result[i] = positives[i / 2];
    result[i + 1] = negatives[i / 2];
  }

  return result;
};

exercise(rearrangeArray, [
  [[[3, 1, -2, -5, 2, -4]], [3, -2, 1, -5, 2, -4]],
  [[[-1, 1]], [1, -1]],
  [[[]], []],
]);
