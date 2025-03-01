import { exercise } from "@shared/utilities/exercise.ts";

const xor = (a: number[], from: number, to: number) => {
  let result = 0;
  for (let i = from; i < to; ++i) result ^= a[i];
  return result;
};

const countTriplets = (arr: number[]): number => {
  const n = arr.length;

  let count = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = i + 2; j <= n; ++j) {
      if (xor(arr, i, j) === 0) count += j - i - 1;
    }
  }

  return count;
};

exercise(countTriplets, [
  [[[2, 3, 1, 6, 7]], 4],
  [[[1, 1, 1, 1, 1]], 10],
  [[Array(300).fill(1)], 2250050],
  [
    [
      [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
    ],
    28595,
  ],
]);
