import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./day-22-slabs.case.txt?raw";
import UserCase from "./day-22-slabs.user.txt?raw";

const counter = (input: string): number => 0;

exercise(counter, [
  [[TestCase], 5],
  [[UserCase], 3617],
]);
