import { exercise } from "@shared/utilities/exercise.js";

const { floor, log10 } = Math;
const integerLength = (n: number) => {
  if (n === 0) return 1;
  if (n < 0) return floor(log10(-n)) + 2;
  return floor(log10(n)) + 1;
};

const findColumnWidth = (grid: number[][]): number[] => {
  let m = grid.length;
  let n = grid[0].length;

  const widths = Array(n);

  for (let y = 0; y < n; ++y) {
    let max = 0;
    for (let x = 0; x < m; ++x) {
      const value = integerLength(grid[x][y]);
      if (value > max) max = value;
    }
    widths[y] = max;
  }

  return widths;
};

exercise(findColumnWidth, [
  [[[[1], [22], [333]]], [3]],
  [
    [
      [
        [-15, 1, 3],
        [15, 7, 12],
        [5, 6, -2],
      ],
    ],
    [3, 1, 2],
  ],
]);
