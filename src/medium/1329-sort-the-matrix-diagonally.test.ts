import { exercise } from "@shared/utilities/exercise.js";

const diagonalSort = (mat: number[][]): number[][] => {
  for (let i = 0; i < mat[0].length; ++i) {
    const diagonal = [];

    for (let j = 0; j < mat.length && i + j < mat[0].length; ++j) {
      diagonal.push(mat[j]?.[i + j]);
    }

    diagonal.sort((a, b) => a - b);
    for (let j = 0; j < mat.length && i + j < mat[0].length; ++j) {
      mat[j][i + j] = diagonal[j];
    }
  }

  for (let j = 1; j < mat.length; ++j) {
    const diagonal = [];

    for (let i = 0; i < mat[0].length && i + j < mat.length; ++i) {
      diagonal.push(mat[i + j][i]);
    }

    diagonal.sort((a, b) => a - b);
    for (let i = 0; i < mat[0].length && i + j < mat.length; ++i) {
      mat[i + j][i] = diagonal[i];
    }
  }

  return mat;
};

exercise(diagonalSort, [
  [
    [
      [
        [3, 3, 1, 1],
        [2, 2, 1, 2],
        [1, 1, 1, 2],
      ],
    ],
    [
      [1, 1, 1, 1],
      [1, 2, 2, 2],
      [1, 2, 3, 3],
    ],
  ],
  [
    [
      [
        [3, 3],
        [2, 2],
        [1, 1],
      ],
    ],
    [
      [2, 3],
      [1, 3],
      [1, 2],
    ],
  ],
]);
