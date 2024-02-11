import { exercise } from "@shared/utilities/exercise.js";

const areSimilar = (mat: number[][], k: number): boolean => {
  const n = mat.length;
  const m = mat[0].length;

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (mat[i][j] !== mat[i][(j + k) % m]) return false;
    }
  }

  return true;
};
exercise(areSimilar, [
  [
    [
      [
        [1, 2, 1, 2],
        [5, 5, 5, 5],
        [6, 3, 6, 3],
      ],
      2,
    ],
    true,
  ],
  [
    [
      [
        [2, 2],
        [2, 2],
      ],
      3,
    ],
    true,
  ],
]);
