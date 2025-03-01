import { exercise } from "@shared/utilities/exercise.ts";

const minOperations = (nums: number[], k: number): number => {
  let xor = nums[0];
  for (let i = 1; i < nums.length; i++) xor ^= nums[i];

  const size = Math.max(0, ~~(Math.log2(k) + 1), ~~(Math.log2(xor) + 1));

  const binK = k.toString(2).padStart(size, "0");
  const binXor = xor.toString(2).padStart(size, "0");

  let count = 0;
  for (let i = 0; i < size; ++i) if (binK[i] !== binXor[i]) ++count;
  return count;
};

exercise(minOperations, [
  [[[2, 1, 3, 4], 1], 2],
  [[[2, 0, 2, 0], 0], 0],
]);
