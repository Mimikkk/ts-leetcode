import { exercise } from "@shared/utilities/exercise.js";

const createCounter = (nums: number[]): Map<number, number> => {
  const counter = new Map<number, number>();

  for (const num of nums) {
    counter.set(num, (counter.get(num) || 0) + 1);
  }

  return counter;
};

const isPossibleToSplit = (nums: number[]): boolean => {
  const counts = createCounter(nums);

  for (const count of counts.values()) {
    if (count > 2) return false;
  }
  return true;
};

exercise(isPossibleToSplit, [
  [[[6, 1, 3, 1, 1, 8, 9, 2]], false],
  [[[1, 1, 2, 2, 3, 4]], true],
  [[[1, 1, 1, 1]], false],
]);
