import { exercise } from "@shared/utilities/exercise.ts";

const rotate = (matrix: number[][]): void => {
  const n = matrix.length;

  for (let i = 0; i < n; ++i) {
    for (let j = i; j < n; ++j) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }

    for (let j = 0; j < n / 2; ++j) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = temp;
    }
  }
};

exercise(
  (matrix: number[][]) => (rotate(matrix), matrix),
  [
    [
      [
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
      ],
      [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ],
    ],
    [
      [
        [
          [5, 1, 9, 11],
          [2, 4, 8, 10],
          [13, 3, 6, 7],
          [15, 14, 12, 16],
        ],
      ],
      [
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11],
      ],
    ],
  ],
);
