import { exercise } from "@shared/utilities/exercise";

const { log10 } = Math;
const maxDigit = (n: number) => {
  let length = ~~log10(n) + 1;
  let max = n % 10;

  while (--length) {
    n = ~~(n / 10);
    const digit = n % 10;
    if (digit > max) max = digit;
  }

  return max;
};

const maxSum = (nums: number[]): number => {
  const cache = new Map<number, number>();
  const n = nums.length;

  let max = -1;
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      let a = cache.get(nums[i]);
      if (a === undefined) {
        a = maxDigit(nums[i]);
        cache.set(nums[i], a);
      }

      let b = cache.get(nums[j]);
      if (b === undefined) {
        b = maxDigit(nums[j]);
        cache.set(nums[j], b);
      }

      if (a !== b) continue;
      const sum = nums[i] + nums[j];

      if (sum > max) max = sum;
    }
  }

  return max;
};

exercise(maxSum, [
  [[[51, 71, 17, 24, 42]], 88],
  [[[1, 2, 3, 4]], -1],
]);
