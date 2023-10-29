import { exercise } from "@shared/utilities/exercise";
export {};

const applyOperations = (nums: number[]): number[] => {
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i - 1] === nums[i]) {
      nums[i - 1] *= 2;
      nums[i] = 0;
    }
  }

  const result = Array.from<number>({ length: nums.length }).fill(0);

  let i = 0;
  let k = 0;
  while (i + k < result.length) {
    if (nums[i + k] === 0) ++k;
    else {
      result[i] = nums[i + k];
      ++i;
    }
  }

  return result;
};

exercise(2460, applyOperations, [
  {
    input: [[1, 0, 2, 0, 0, 1]],
    output: [1, 2, 1, 0, 0, 0],
  },
  {
    input: [[1, 2, 2, 1, 1, 0]],
    output: [1, 4, 2, 0, 0, 0],
  },
  {
    input: [[0, 1]],
    output: [1, 0],
  },
  {
    input: [[1, 2, 3, 4, 5]],
    output: [1, 2, 3, 4, 5],
  },
]);
