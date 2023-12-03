import { exercise } from "@shared/utilities/exercise.js";

const numberOfEmployeesWhoMetTarget = (hours: number[], target: number): number => {
  const n = hours.length;

  let count = 0;
  for (let i = 0; i < n; ++i) if (hours[i] >= target) ++count;
  return count;
};

exercise(numberOfEmployeesWhoMetTarget, [
  [[[0, 1, 2, 3, 4], 2], 3],
  [[[5, 1, 4, 2, 2], 6], 0],
]);
