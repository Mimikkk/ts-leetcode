import { exercise } from "@shared/utilities/exercise";

const sumOfSquares = (nums: number[]): number => {
  const n = nums.length;

  let sum = 0;
  for (let i = 0; i < n; ++i) if (n % (i + 1) === 0) sum += nums[i] * nums[i];
  return sum;
};

exercise(sumOfSquares, [
  [[[1, 2, 3, 4]], 21],
  [[[2, 7, 1, 19, 18, 3]], 63],
]);
