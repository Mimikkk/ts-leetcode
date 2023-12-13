import { exercise } from "@shared/utilities/exercise.js";
import Test1Case from "./day-12-hot-springs.case-1.txt?raw";
import Test2Case from "./day-12-hot-springs.case-2.txt?raw";
import UserCase from "./day-12-hot-springs.user.txt?raw";
import { Schema } from "./day-12-hot-springs.utils.js";

const springs = (input: string): number =>
  Schema.parse(input)
    .map((schema) => Schema.extend(schema, 5))
    .map(Schema.countArrangements)
    .reduce((a, b) => a + b, 0);

exercise(springs, [
  [[Test1Case], 16384],
  [[Test2Case], 506250],
  [[UserCase], 0],
]);
