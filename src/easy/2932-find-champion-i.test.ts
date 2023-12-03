import { exercise } from "@shared/utilities/exercise.js";

const maxBy = <T>(list: T[], fn: (item: T) => number): T | undefined => {
  let max: T | undefined;
  let maxValue = -Infinity;

  for (const item of list) {
    const value = fn(item);
    if (value > maxValue) {
      max = item;
      maxValue = value;
    }
  }

  return max;
};
const findChampion = (grid: number[][]): number => {
  let maxRowIndex = 0;
  let maxCount: number = 0;

  const rowCount = grid.length;
  for (let i = 0; i < rowCount; i++) {
    const row = grid[i];

    let count = 0;
    const rowLength = grid[i].length;
    for (let j = 0; j < rowLength; ++j) {
      if (row[j] === 1) ++count;
    }

    if (count > maxCount) {
      maxRowIndex = i;
      maxCount = count;
    }
  }

  return maxRowIndex;
};

exercise(findChampion, [
  [
    [
      [
        [0, 1],
        [0, 0],
      ],
    ],
    0,
  ],
  [
    [
      [
        [0, 0, 1],
        [1, 0, 1],
        [0, 0, 0],
      ],
    ],
    1,
  ],
]);
