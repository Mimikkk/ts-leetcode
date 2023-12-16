import { exercise } from "@shared/utilities/exercise.js";
import UserCase from "./day-15-lens.user.txt?raw";
import TestCase from "./day-15-lens.case.txt?raw";
import { Lens } from "./day-15-lens.utils.js";

const lens = (input: string): number =>
  Lens.parse(input)
    .map(Lens.hash)
    .reduce((a, b) => a + b, 0);

exercise(lens, [
  [["HASH"], 52],
  [[TestCase], 1320],
  [[UserCase], 514025],
]);
