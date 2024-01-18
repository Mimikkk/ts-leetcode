import { exercise } from "@shared/utilities/exercise.js";

const findThePrefixCommonArray = (A: number[], B: number[]): number[] => {
  const set = new Set(A);
  const sizes = [];

  for (let i = A.length - 1; i >= 0; --i) {
    sizes[i] = set.size;
    set.delete(A[i]);
    set.delete(B[i]);
  }

  return sizes;
};

exercise(findThePrefixCommonArray, [
  [
    [
      [1, 3, 2, 4],
      [3, 1, 2, 4],
    ],
    [0, 2, 3, 4],
  ],
  [
    [
      [2, 3, 1],
      [3, 1, 2],
    ],
    [0, 1, 3],
  ],
]);
