import { exercise } from "@shared/utilities/exercise.js";

const maxOperations = (nums: number[]): number => {
  let count = 1;
  const target = nums[0] + nums[1];
  for (let i = 2, it = nums.length; i < it; i += 2)
    if (nums[i] + nums[i + 1] === target) ++count;
    else break;
  return count;
};

exercise(maxOperations, [[[[3, 2, 1, 4, 5]], 2]]);
