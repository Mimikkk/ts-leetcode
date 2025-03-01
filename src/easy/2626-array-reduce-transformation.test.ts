import { exercise } from "@shared/utilities/exercise.ts";

type Fn = (accum: number, curr: number) => number;

const reduce = (nums: number[], fn: Fn, init: number): number => {
  let accumulator = init;
  let n = nums.length;
  for (let i = 0; i < n; ++i) accumulator = fn(accumulator, nums[i]);
  return accumulator;
};

exercise(reduce, [[[[1, 2, 3], (x, y) => x + y, 3], 9]]);
