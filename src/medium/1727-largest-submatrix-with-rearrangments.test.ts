import { exercise } from "@shared/utilities/exercise.js";

const largestSubmatrix = (matrix: number[][]): number => {
  const columnHeights = Array(matrix[0].length).fill(0);

  const consecutiveOnes = matrix.map((row) =>
    row.map((column, i) => (columnHeights[i] = column == 1 ? columnHeights[i] + 1 : 0)).sort((a, b) => b - a),
  );

  return Math.max(...consecutiveOnes.flatMap((row) => row.flatMap((value, i) => value * (i + 1))));
};

exercise(largestSubmatrix, [
  [
    [
      [
        [0, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
      ],
    ],
    4,
  ],
]);
