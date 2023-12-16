import { exercise } from "@shared/utilities/exercise.js";
import UserCase from "./day-16-floor.user.txt?raw";
import TestCase from "./day-16-floor.case.txt?raw";

const floor = (input: string): number => 0;

exercise(floor, [
  [[TestCase], 1320],
  [[UserCase], 514025],
]);
