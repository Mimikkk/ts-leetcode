import { exercise } from "@shared/utilities/exercise.ts";

const theMaximumAchievableX = (num: number, t: number): number => num + 2 * t;

exercise(theMaximumAchievableX, [
  [[4, 1], 6],
  [[3, 2], 7],
]);
