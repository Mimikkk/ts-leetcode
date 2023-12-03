import { exercise } from "@shared/utilities/exercise.js";

const passThePillow = (n: number, time: number): number =>
  (time / (n - 1)) & 1 ? n - (time % (n - 1)) : 1 + (time % (n - 1));

exercise(passThePillow, [
  [[4, 0], 1],
  [[4, 1], 2],
  [[4, 2], 3],
  [[4, 3], 4],
  [[4, 4], 3],
  [[4, 5], 2],
  [[4, 6], 1],
  [[4, 7], 2],
  [[4, 8], 3],
  [[4, 9], 4],
  [[4, 10], 3],
]);
