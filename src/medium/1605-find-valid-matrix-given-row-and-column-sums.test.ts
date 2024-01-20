import { exercise } from "@shared/utilities/exercise.js";
import { createMatrix } from "../adventofcode2023/utils/utils.js";

const restoreMatrix = (rowSums: number[], colSums: number[]): number[][] => {
  const n = rowSums.length;
  const m = colSums.length;
  const matrix = createMatrix(n, m, 0);

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      matrix[i][j] = Math.min(rowSums[i], colSums[j]);
      rowSums[i] -= matrix[i][j];
      colSums[j] -= matrix[i][j];
    }
  }

  return matrix;
};

exercise(restoreMatrix, [
  [
    [
      [3, 8],
      [4, 7],
    ],
    [
      [3, 0],
      [1, 7],
    ],
  ],
  [
    [
      [5, 7, 10],
      [8, 6, 8],
    ],
    [
      [5, 0, 0],
      [3, 4, 0],
      [0, 2, 8],
    ],
  ],
]);
