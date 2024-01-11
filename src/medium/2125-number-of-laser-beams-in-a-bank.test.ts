import { exercise } from "@shared/utilities/exercise.js";

namespace Beams {
  export const counts = (bank: string[]): number[] => {
    const counts = new Array(bank.length).fill(0);

    for (let i = 0; i < bank.length; ++i) {
      for (let j = 0; j < bank[0].length; ++j) {
        if (bank[i][j] === "1") ++counts[i];
      }
    }

    return counts.filter((count) => count);
  };
}

const pairwise = (array: number[]): [number, number][] => {
  const pairs: [number, number][] = [];

  for (let i = 1; i < array.length; ++i) {
    pairs.push([array[i - 1], array[i]]);
  }

  return pairs;
};

const numberOfBeams = (bank: string[]): number =>
  pairwise(Beams.counts(bank))
    .map(([a, b]) => a * b)
    .reduce((sum, n) => sum + n, 0);

exercise(numberOfBeams, [
  [[["011001", "000000", "010100", "001000"]], 8],
  [[["000", "111", "000"]], 0],
  [[["010", "110", "001"]], 4],
  [
    [
      [
        "11110001001001001001",
        "11110001001001001001",
        "11110001001001001001",
        "11110001001001001001",
        "11110001001001001001",
        "11110001001001001001",
        "11110001001001001001",
        "11110001001001001001",
        "11110001001001001001",
        "11110001001001001001",
      ],
    ],
    729,
  ],
]);
