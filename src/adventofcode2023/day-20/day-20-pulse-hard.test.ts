import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./day-20-pulse.case.txt?raw";
import UserCase from "./day-20-pulse.user.txt?raw";

const pulse = (input: string): number => 0;

exercise(pulse, [
  [[TestCase], 5],
  [[UserCase], 3617],
]);
