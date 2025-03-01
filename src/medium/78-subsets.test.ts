import { exercise } from "@shared/utilities/exercise.ts";

const subsets = (nums: number[]): number[][] =>
  Array.from(new Set<number>(nums)).reduce<number[][]>(
    (sets, val) => sets.concat(sets.map((set) => [...set, val])),
    [[]],
  );

exercise(subsets, [
  [[[1, 2, 3]], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]],
  [[[0]], [[], [0]]],
]);
