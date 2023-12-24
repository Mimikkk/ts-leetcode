import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./day-24-odds.case.txt?raw";
import UserCase from "./day-24-odds.user.txt?raw";

const odds = (input: string): number => 0;

exercise(odds, [
  [[TestCase], 5],
  [[UserCase], 3617],
]);
