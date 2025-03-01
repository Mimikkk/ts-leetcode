import { exercise } from "@shared/utilities/exercise.ts";

const max = (n: number[]) => Math.max(...n);
const maxIncreaseKeepingSkyline = (grid: number[][]): number => {
  const rowMaxes = grid.map(max);
  const colMaxes = grid[0].map((_, j) => grid.map((row) => row[j])).map(max);

  let gridSum = 0;
  const n = grid.length;
  const m = grid[0].length;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      gridSum += Math.min(rowMaxes[i], colMaxes[j]) - grid[i][j];
    }
  }

  return gridSum;
};

exercise(maxIncreaseKeepingSkyline, [
  [
    [
      [
        [3, 0, 8, 4],
        [2, 4, 5, 7],
        [9, 2, 6, 3],
        [0, 3, 1, 0],
      ],
    ],
    35,
  ],
  [
    [
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    ],
    0,
  ],
]);
