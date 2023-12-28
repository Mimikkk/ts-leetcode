import { exercise } from "@shared/utilities/exercise.js";

const onesMinusZeros = (grid: number[][]): number[][] => {
  const onesInColumns = grid[0].map((_, index) => grid.reduce((acc, row) => acc + row[index], 0));
  const zerosInColumns = grid[0].map((_, index) => grid.reduce((acc, row) => acc + (row[index] ? 0 : 1), 0));

  const onesInRows = grid.map((row) => row.reduce((acc, value) => acc + value, 0));
  const zerosInRows = grid.map((row) => row.reduce((acc, value) => acc + (value ? 0 : 1), 0));

  const result = Array(grid.length)
    .fill(0)
    .map(() => Array(grid[0].length).fill(0));

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      result[row][column] = onesInRows[row] + onesInColumns[column] - zerosInRows[row] - zerosInColumns[column];
    }
  }

  return result;
};

exercise(onesMinusZeros, [
  [
    [
      [
        [0, 1, 1],
        [1, 0, 1],
        [0, 0, 1],
      ],
    ],
    [
      [0, 0, 4],
      [0, 0, 4],
      [-2, -2, 2],
    ],
  ],
  [
    [
      [
        [1, 1, 1],
        [1, 1, 1],
      ],
    ],
    [
      [5, 5, 5],
      [5, 5, 5],
    ],
  ],
]);
