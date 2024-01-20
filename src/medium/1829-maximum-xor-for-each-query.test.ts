import { exercise } from "@shared/utilities/exercise.js";
import { createMatrix } from "../adventofcode2023/utils/utils.js";

const getMaximumXor = (nums: number[], maximumBit: number): number[] => {
  for (let i = 1; i < nums.length; ++i) nums[i] ^= nums[i - 1];

  const result = [];

  for (let i = 0; i < nums.length; ++i) {
    const mask = (1 << maximumBit) - 1;
    result.push(mask ^ nums[nums.length - i - 1]);
  }

  return result;
};

exercise(getMaximumXor, [
  [
    [[0, 1, 1, 3], 2],
    [0, 3, 2, 3],
  ],
  [
    [[2, 3, 4, 7], 3],
    [5, 2, 6, 5],
  ],
]);
