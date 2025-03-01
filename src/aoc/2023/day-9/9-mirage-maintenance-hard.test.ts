import { exercise } from "@shared/utilities/exercise.ts";
const TestCase = await Deno.readTextFile("./9-mirage-maintenance.case.txt");
const UserCase = await Deno.readTextFile("./9-mirage-maintenance.user.txt");

const add = (a: number, b: number): number => a + b;
const oSub = (a: number, b: number): number => b - a;
const oDif = (nums: number[]): number => nums.reduce(oSub);

const mirage = (input: string): number =>
  input
    .split(/\r?\n/)
    .filter((line) => line)
    .map((history) => history.split(" ").map((chapter) => +chapter))
    .map((history) => {
      const row = Array(history.length);

      for (let j = 0, it = history.length; j < it; j++) {
        row[history.length - j - 1] = history[0];

        for (let k = 1; k < it - j; k++) history[k - 1] = history[k] - history[k - 1];

        if (it - j - 1 === 0) break;
      }

      return row;
    })
    .map(oDif)
    .reduce(add);

exercise(mirage, [
  [[TestCase], 2],
  [[UserCase], 919],
]);
