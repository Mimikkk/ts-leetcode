import { exercise } from "@shared/utilities/exercise.ts";

const maxSumAfterPartitioning = (arr: number[], k: number): number => {
  const n = arr.length;
  const sums = Array(n + 1).fill(0);

  for (let index = 1; index <= n; ++index) {
    let max = 0;
    for (let offset = 1; offset <= k; ++offset) {
      const previous = arr[index - offset];
      if (previous > max) max = previous;

      const sum = sums[index - offset] + max * offset;
      if (sums[index] < sum) sums[index] = sum;
    }
  }

  return sums[n];
};

exercise(maxSumAfterPartitioning, [
  [[[1, 15, 7, 9, 2, 5, 10], 3], 84],
  [[[1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4], 83],
  [[[1], 1], 1],
]);
