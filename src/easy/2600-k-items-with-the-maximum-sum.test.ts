import { exercise } from "@shared/utilities/exercise";

const kItemsWithMaximumSum = (numOnes: number, numZeros: number, numNegOnes: number, k: number): number =>
  k <= numOnes ? k : k <= numOnes + numZeros ? numOnes : numOnes - (k - numOnes - numZeros);

exercise(kItemsWithMaximumSum, [
  [[3, 2, 0, 2], 2],
  [[3, 2, 0, 4], 3],
  [[3, 2, 2, 7], 1],
  [[3, 2, 3, 7], 1],
  [[3, 0, 4, 7], -1],
  [[3, 0, 4, 6], 0],
  [[3, 0, 5, 6], 0],
]);
