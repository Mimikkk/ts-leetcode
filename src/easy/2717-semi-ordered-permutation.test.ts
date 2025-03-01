import { exercise } from "@shared/utilities/exercise.ts";

const count = (n: number, i: number, j: number) => (i > j ? -1 : 0) + i + (n - j - 1);
const semiOrderedPermutation = (nums: number[]): number => {
  let leftIndex: number | undefined;
  let rightIndex: number | undefined;

  let n = nums.length;
  for (let i = 0; i < n; ++i) {
    if (nums[i] === n) {
      rightIndex = i;
      if (leftIndex === undefined) continue;
      return count(n, leftIndex, rightIndex);
    } else if (nums[i] === 1) {
      leftIndex = i;
      if (rightIndex === undefined) continue;
      return count(n, leftIndex, rightIndex);
    }
  }

  return -1;
};

exercise(semiOrderedPermutation, [
  [[[2, 1, 4, 3]], 2],
  [[[2, 4, 1, 3]], 3],
  [[[2, 5, 1, 4, 3]], 4],
  [[[1, 3, 4, 2, 5]], 0],
]);
