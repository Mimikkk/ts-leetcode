import { exercise } from "@shared/utilities/exercise.js";
import UserCase from "./day-14-dish.user.txt?raw";
import TestCase from "./day-14-dish.case.txt?raw";

const dish = (input: string): number => 0;

exercise(dish, [
  [[TestCase], 405],
  [[UserCase], 30487],
]);
