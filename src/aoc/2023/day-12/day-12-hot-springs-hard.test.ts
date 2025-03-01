import { exercise } from "@shared/utilities/exercise.ts";
const Test1Case = await Deno.readTextFile("./day-12-hot-springs.case-1.txt");
const Test2Case = await Deno.readTextFile("./day-12-hot-springs.case-2.txt");
const UserCase = await Deno.readTextFile("./day-12-hot-springs.user.txt");
import { Springs } from "./day-12-hot-springs.utils.ts";

const springs = (input: string) =>
  Springs.parse(input)
    .map(Springs.extend)
    .map(([a, b]) => Springs.countArrangements(a, b))
    .reduce((a, b) => a + b, 0);

exercise(springs, [
  [[Test1Case], 16384],
  [[Test2Case], 525152],
  [[UserCase], 10153896718999],
]);
