import { exercise } from "@shared/utilities/exercise.ts";

const accumulate = (nums: number[]): number[] => {
  if (!nums.length) return [];

  const acc = Array(nums.length);
  acc[0] = nums[0];
  for (let i = 1; i < nums.length; ++i) acc[i] = nums[i] + acc[i - 1];
  return acc;
};

const garbageCollection = (garbage: string[], travel: number[]): number => {
  const lastTrashIndices: {
    M?: number;
    P?: number;
    G?: number;
  } = {};

  const collectorSums = accumulate(travel);

  const counters = { M: 0, P: 0, G: 0 };
  for (let i = garbage.length - 1; i >= 0; --i) {
    for (let j = 0; j < garbage[i].length; ++j) {
      const char = garbage[i][j];

      if (char === "M") {
        ++counters.M;
        if (lastTrashIndices.M === undefined) lastTrashIndices.M = i;
      } else if (char === "P") {
        ++counters.P;
        if (lastTrashIndices.P === undefined) lastTrashIndices.P = i;
      } else if (char === "G") {
        ++counters.G;
        if (lastTrashIndices.G === undefined) lastTrashIndices.G = i;
      }
    }
  }

  return Object.entries(lastTrashIndices)
    .map(([trash, i]) => (collectorSums[i - 1] || 0) + counters[trash as keyof typeof counters])
    .reduce((a, b) => a + b, 0);
};

exercise(garbageCollection, [
  [
    [
      ["G", "P", "GP", "GG"],
      [2, 4, 3],
    ],
    21,
  ],
  [
    [
      ["MMM", "PGM", "GP"],
      [3, 10],
    ],
    37,
  ],
  [[["G", "P"], [1]], 3],
]);
