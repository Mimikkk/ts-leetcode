import { exercise } from "@shared/utilities/exercise.ts";

const hasTrailingZeros = (nums: number[]): boolean => nums.filter((n) => n % 2 === 0).length > 1;

exercise(hasTrailingZeros, [
  [[[1, 2, 3, 4, 5]], true],
  [[[2, 4, 8, 16]], true],
  [[[1, 3, 5, 7, 9]], false],
]);
