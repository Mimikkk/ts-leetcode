import { exercise } from "@shared/utilities/exercise.ts";

const maxSum = (grid: number[][]): number => {
  let max = 0;
  for (let i = 1, it = grid.length - 1, jt = grid[0].length - 1; i < it; ++i) {
    for (let j = 1; j < jt; ++j) {
      const value =
        grid[i - 1][j - 1] +
        grid[i - 1][j] +
        grid[i - 1][j + 1] +
        grid[i][j] +
        grid[i + 1][j - 1] +
        grid[i + 1][j] +
        grid[i + 1][j + 1];

      if (value > max) max = value;
    }
  }

  return max;
};

exercise(maxSum, [
  [
    [
      [
        [6, 2, 1, 3],
        [4, 2, 1, 5],
        [9, 2, 8, 7],
        [4, 1, 2, 9],
      ],
    ],
    30,
  ],
  [
    [
      [
        [520626, 685427, 788912, 800638, 717251, 683428],
        [23602, 608915, 697585, 957500, 154778, 209236],
        [287585, 588801, 818234, 73530, 939116, 252369],
      ],
    ],
    5095181,
  ],
]);
