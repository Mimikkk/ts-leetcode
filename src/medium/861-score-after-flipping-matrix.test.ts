import { exercise } from "@shared/utilities/exercise.js";

const matrixScore = (grid: number[][]): number => {
  const n = grid.length;
  const m = grid[0].length;

  const flipRow = (index: number) => grid[index].forEach((value, i) => (grid[index][i] = value === 0 ? 1 : 0));
  const flipColumn = (index: number) => grid.forEach((row) => (row[index] = row[index] === 0 ? 1 : 0));
  const sumColumn = (index: number) => grid.reduce((sum, row) => sum + row[index], 0) * 2;

  grid.forEach(([first], i) => first === 0 && flipRow(i));
  for (let i = 1; i < m; ++i) {
    if (sumColumn(i) >= n) continue;

    flipColumn(i);
  }

  return grid.reduce((sum, row) => sum + row.reduce((sum, n) => sum * 2 + n, 0), 0);
};

exercise(matrixScore, [
  [
    [
      [
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [1, 1, 0, 0],
      ],
    ],
    39,
  ],
  [[[[0]]], 1],
]);
