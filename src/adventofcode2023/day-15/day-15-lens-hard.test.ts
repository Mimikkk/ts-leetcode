import { exercise } from "@shared/utilities/exercise.js";
import UserCase from "./day-15-lens.user.txt?raw";
import TestCase from "./day-15-lens.case.txt?raw";

const lens = (input: string): number => 0;

exercise(lens, [
  [[TestCase], 64],
  [[UserCase], 106689],
]);
