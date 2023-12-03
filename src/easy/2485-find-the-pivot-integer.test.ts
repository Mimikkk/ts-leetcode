import { exercise } from "@shared/utilities/exercise.js";

export {};

const pivotInteger = (n: number): number => {
  let sum = 0;
  for (let x = 1; x <= n; ++x) sum += x;

  let left = 0;
  let right = sum;
  for (let x = 1; x <= n; ++x) {
    left += x - 1;
    right -= x;
    if (left === right) return x;
  }

  return -1;
};

exercise(pivotInteger, [
  [[8], 6],
  [[1], 1],
  [[4], -1],
]);
