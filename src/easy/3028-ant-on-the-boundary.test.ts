import { exercise } from "@shared/utilities/exercise.js";

const returnToBoundaryCount = (numbers: number[]): number => {
  let count = 0;

  let location = 0;
  for (const num of numbers) {
    location += num;
    if (location === 0) ++count;
  }

  return count;
};

exercise(returnToBoundaryCount, [
  [[[2, 3, -5]], 1],
  [[[3, 2, -3, -4]], 0],
]);
