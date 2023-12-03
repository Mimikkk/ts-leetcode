import { exercise } from "@shared/utilities/exercise.js";

type Fn = (n: number, i: number) => any;

const filter = (arr: number[], fn: Fn): number[] => {
  let result = [];
  const n = arr.length;
  for (let i = 0; i < n; ++i) if (fn(arr[i], i)) result.push(arr[i]);
  return result;
};

exercise(filter, [
  [
    [[1, 2, 3], (x) => x & 1],
    [1, 3],
  ],
]);
