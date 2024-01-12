import { exercise } from "@shared/utilities/exercise.js";

const swap = <T>(items: T[], i: number, j: number): void => {
  const temp = items[i + 1];
  items[i + 1] = items[i];
  items[i] = temp;
};

const numberGame = (nums: number[]): number[] => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) swap(nums, i, i + 1);
  return nums;
};

exercise(numberGame, [[[[5, 4, 2, 3]], [3, 2, 5, 4]]]);
