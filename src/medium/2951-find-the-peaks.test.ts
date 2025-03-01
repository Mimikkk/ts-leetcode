import { exercise } from "@shared/utilities/exercise.ts";

const findPeaks = (mountain: number[]): number[] => {
  const peakIndices = [];

  for (let i = 1; i < mountain.length - 1; ++i) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) peakIndices.push(i);
  }

  return peakIndices;
};

exercise(findPeaks, [
  [[[2, 4, 4]], []],
  [[[1, 4, 3, 8, 5]], [1, 3]],
]);
