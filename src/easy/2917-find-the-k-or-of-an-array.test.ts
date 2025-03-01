import { exercise } from "@shared/utilities/exercise.ts";

const findKOr = (nums: number[], k: number): number => {
  let max = 0;
  for (let i = 0; i < nums.length; ++i) if (nums[i] > max) max = nums[i];
  const bitCount = Math.max(0, Math.floor(Math.log2(max) + 1));
  const bitCounts = Array(bitCount).fill(0);

  for (let i = 0; i < bitCount; ++i) {
    for (let j = 0; j < nums.length; ++j) {
      if (nums[j] === 0) continue;

      if (nums[j] & 1) ++bitCounts[i];
      nums[j] >>= 1;
    }
  }

  let kor = 0;
  let value = 1;
  for (let i = 0; i < bitCount; ++i) {
    if (bitCounts[i] >= k) kor += value;
    value <<= 1;
  }

  return kor;
};

exercise(findKOr, [
  [[[7, 12, 9, 8, 9, 15], 4], 9],
  [[[2, 12, 1, 11, 4, 5], 6], 0],
  [[[10, 8, 5, 9, 11, 6, 8], 1], 15],
  [[[1], 1], 1],
]);
