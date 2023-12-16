import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./day-16-floor.case.txt?raw";
import UserCase from "./day-16-floor.user.txt?raw";
import { Floor } from "./day-16-floor.utils.js";

const floor = (input: string): number => Floor.explore(Floor.parse(input), [0, 0], "right");

exercise(floor, [
  [[TestCase], 46],
  [[UserCase], 7798],
]);
