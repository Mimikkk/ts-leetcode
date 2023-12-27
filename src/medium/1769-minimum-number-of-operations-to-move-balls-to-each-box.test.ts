import { exercise } from "@shared/utilities/exercise.js";

const minOperations = (boxes: string): number[] =>
  [...boxes].map((_, i, arr) => arr.reduce((a, b, j) => (b === "0" ? a : a + Math.abs(i - j)), 0));

exercise(minOperations, [
  [["001011"], [11, 8, 5, 4, 3, 4]],
  [["110"], [1, 1, 3]],
]);
