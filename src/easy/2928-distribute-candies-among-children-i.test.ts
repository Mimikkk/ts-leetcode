import { exercise } from "@shared/utilities/exercise.js";

const { min, max } = Math;
const distributeCandies = (n: number, limit: number): number => {
  if (n <= limit) return ((n + 1) * (n + 2)) / 2;

  let combinations = 0;
  const maxFirst = min(limit, n);
  for (let first = max(0, n - limit * 2); first <= maxFirst; ++first) {
    const remainingForSecondAndThird = n - first;
    const minSecond = max(0, remainingForSecondAndThird - limit);
    const maxSecond = min(remainingForSecondAndThird, limit);
    combinations += maxSecond - minSecond + 1;
  }
  return combinations;
};

exercise(distributeCandies, [
  [[2, 2], 6],
  [[3, 3], 10],
  [[4, 4], 15],
  [[5, 5], 21],
  [[6, 6], 28],
  [[10, 10], 66],
  [[11, 11], 78],
  [[12, 12], 91],
  [[1, 4], 3],
  [[2, 4], 6],
  [[3, 4], 10],
  [[4, 4], 15],
  [[5, 4], 18],
  [[6, 4], 19],
  [[7, 4], 18],
  [[8, 4], 15],
  [[9, 4], 10],
  [[10, 4], 6],
  [[11, 4], 3],
  [[12, 4], 1],
  [[13, 4], 0],
  [[6, 5], 25],
  [[7, 5], 27],
  [[8, 5], 27],
  [[9, 5], 25],
  [[10, 5], 21],
  [[11, 5], 15],
  [[12, 5], 10],
  [[13, 5], 6],
  [[14, 5], 3],
  [[15, 5], 1],
  [[16, 5], 0],
]);
