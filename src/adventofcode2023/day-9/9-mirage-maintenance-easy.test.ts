import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./9-mirage-maintenance.case.txt?raw";
import UserCase from "./9-mirage-maintenance.user.txt?raw";

const add = (a: number, b: number): number => a + b;
const sum = (numbers: number[]): number => numbers.reduce(add, 0);

const mirage = (input: string): number =>
  input
    .split(/\r?\n/)
    .filter((line) => line)
    .map((history) => history.split(" ").map((chapter) => +chapter))
    .map((history) => {
      for (let j = 0, it = history.length; j < it; j++) {
        for (let k = 1; k < it - j; k++) history[k - 1] = history[k] - history[k - 1];

        if (it - j - 1 === 0) break;
      }

      return history;
    })
    .map(sum)
    .reduce(add);

exercise(mirage, [
  [[TestCase], 114],
  [[UserCase], 1972648895],
]);
