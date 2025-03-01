import { exercise } from "@shared/utilities/exercise.ts";

const add = (a: number, b: number): number => a + b;
const sum = (array: number[]): number => array.reduce(add, 0);

const onesMinusZeros = (grid: number[][]): number[][] => {
  const onesInColumns = grid[0].map((_, i) => sum(grid.map((x) => x[i])));
  const zerosInColumns = grid[0].map((_, i) => grid.length - onesInColumns[i]);
  const onesInRows = grid.map(sum);
  const zerosInRows = grid.map((row, i) => row.length - onesInRows[i]);

  return grid.map((row, i) => row.map((_, j) => onesInRows[i] + onesInColumns[j] - zerosInRows[i] - zerosInColumns[j]));
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
