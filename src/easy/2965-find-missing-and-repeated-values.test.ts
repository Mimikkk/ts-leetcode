import { exercise } from "@shared/utilities/exercise.ts";

const findMissingAndRepeatedValues = (grid: number[][]): [number, number] => {
  const { length: n } = grid;

  const set = new Set<number>();
  for (let i = 1, it = n * n; i <= it; ++i) set.add(i);

  let value = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (!set.delete(grid[i][j])) value = grid[i][j];
    }
  }

  return [value, [...set.values()][0]];
};

exercise(findMissingAndRepeatedValues, [
  [
    [
      [
        [1, 3],
        [2, 2],
      ],
    ],
    [2, 4],
  ],
  [
    [
      [
        [9, 1, 7],
        [8, 9, 2],
        [3, 4, 6],
      ],
    ],
    [9, 5],
  ],
]);
