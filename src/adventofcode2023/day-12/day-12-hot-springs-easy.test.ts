import { exercise } from "@shared/utilities/exercise.js";
import Test1Case from "./day-12-hot-springs.case-1.txt?raw";
import Test2Case from "./day-12-hot-springs.case-2.txt?raw";
import UserCase from "./day-12-hot-springs.user.txt?raw";
import { Springs } from "./day-12-hot-springs.utils.js";

const springs = (input: string) =>
  Springs.parse(input)
    .map(([a, b]) => Springs.countArrangements(a, b))
    .reduce((a, b) => a + b, 0);

exercise(springs, [
  [[Test1Case], 4],
  [[Test2Case], 21],
  [[UserCase], 7843],
]);
