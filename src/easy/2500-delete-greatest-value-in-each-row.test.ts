import { exercise } from "@shared/utilities/exercise.js";

const deleteGreatestValue = (grid: number[][]): number => {
  for (let row of grid) row.sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < grid[0].length; ++i) {
    let max = 0;
    for (let j = 0; j < grid.length; ++j) {
      if (grid[j][i] > max) max = grid[j][i];
    }
    sum += max;
  }

  return sum;
};

exercise(deleteGreatestValue, [
  [
    [
      [
        [1, 2, 4],
        [3, 3, 1],
      ],
    ],
    8,
  ],
  [[[[10]]], 10],
]);
