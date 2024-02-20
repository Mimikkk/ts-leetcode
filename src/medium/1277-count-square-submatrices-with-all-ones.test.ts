import { exercise } from "@shared/utilities/exercise.js";

const countSquares = (matrix: (0 | 1)[][]): number => {
  const n = matrix.length;
  const m = matrix[0].length;

  const squares = Array.from({ length: n }, () => Array(m).fill(0));

  let count = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (matrix[i][j] === 0) continue;

      if (i === 0 || j === 0) {
        squares[i][j] = 1;
      } else {
        squares[i][j] = Math.min(squares[i - 1][j], squares[i][j - 1], squares[i - 1][j - 1]) + 1;
      }

      count += squares[i][j];
    }
  }

  return count;
};

exercise(countSquares, [
  [
    [
      [
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 1, 1, 1],
      ],
    ],
    15,
  ],
  [
    [
      [
        [1, 0, 1],
        [1, 1, 0],
        [1, 1, 0],
      ],
    ],
    7,
  ],
]);
