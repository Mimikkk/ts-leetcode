import { exercise } from "@shared/utilities/exercise.ts";

const isGood = (nums: number[]): boolean => {
  const n = new Set(nums).size;
  const values = new Map<number, number>();

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === n) {
      if (values.get(nums[i]) === 2) return false;
    } else if (values.has(nums[i])) return false;

    values.set(nums[i], (values.get(nums[i]) ?? 0) + 1);
  }

  for (const key of values.keys()) if (key < 1 || key > n) return false;
  return values.get(n) === 2;
};

exercise(isGood, [
  [[[2, 1, 3]], false],
  [[[1, 3, 3, 2]], true],
  [[[1, 1]], true],
  [[[3, 4, 4, 1, 2, 1]], false],
  [[[14, 2, 2]], false],
]);
