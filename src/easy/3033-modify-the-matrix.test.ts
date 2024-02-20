import { exercise } from "@shared/utilities/exercise.js";

const modifiedMatrix = (matrix: number[][]): number[][] => {
  const n = matrix.length;
  const m = matrix[0].length;

  const maxByColumn = Array(m).fill(0);
  for (let j = 0; j < m; ++j) {
    for (let i = 0; i < n; ++i) {
      if (matrix[i][j] > maxByColumn[j]) maxByColumn[j] = matrix[i][j];
    }
  }

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (matrix[i][j] === -1) matrix[i][j] = maxByColumn[j];
    }
  }

  return matrix;
};

exercise(modifiedMatrix, [
  [
    [
      [
        [1, 2, -1],
        [4, -1, 6],
        [7, 8, 9],
      ],
    ],
    [
      [1, 2, 9],
      [4, 8, 6],
      [7, 8, 9],
    ],
  ],
  [
    [
      [
        [3, -1],
        [5, 2],
      ],
    ],
    [
      [3, 2],
      [5, 2],
    ],
  ],
  [
    [
      [
        [2, -1, 2, -1, 2],
        [1, 0, -1, 2, -1],
        [2, -1, -1, -1, 2],
        [2, 1, 2, -1, 2],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, -1],
        [2, -1, 2, 2, 0],
        [0, 1, 0, 2, 2],
        [2, 2, 0, 1, -1],
      ],
    ],
    [
      [2, 2, 2, 2, 2],
      [1, 0, 2, 2, 2],
      [2, 2, 2, 2, 2],
      [2, 1, 2, 2, 2],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 0, 2],
      [2, 2, 2, 2, 0],
      [0, 1, 0, 2, 2],
      [2, 2, 0, 1, 2],
    ],
  ],
]);
