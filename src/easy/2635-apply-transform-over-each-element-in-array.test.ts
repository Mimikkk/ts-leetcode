import { exercise } from "@shared/utilities/exercise.js";

const map = (arr: number[], fn: (n: number, i: number) => number): number[] => {
  let result: number[] = [];
  const n = arr.length;
  for (let i = 0; i < n; ++i) result.push(fn(arr[i], i));
  return result;
};

exercise(map, [
  [
    [[1, 1, 2], () => 4],
    [4, 4, 4],
  ],
]);
