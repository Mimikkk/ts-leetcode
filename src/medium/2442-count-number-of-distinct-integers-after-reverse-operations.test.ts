import { exercise } from "@shared/utilities/exercise.js";
import { it, suite } from "vitest";

const countDistinctIntegers = (nums: number[]): number =>
  new Set(nums.concat(nums.map((n) => +`${n}`.split("").reverse().join("")))).size;

exercise(countDistinctIntegers, [
  [[[1, 2, 3, 4, 5]], 5],
  [[[1, 1, 1, 1, 1]], 1],
  [[[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]], 5],
]);
