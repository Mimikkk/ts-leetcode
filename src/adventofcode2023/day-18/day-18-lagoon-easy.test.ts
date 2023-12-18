import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./day-18-lagoon.case.txt?raw";
import UserCase from "./day-18-lagoon.user.txt?raw";
import { Lagoon } from "./day-18-lagoon.utils.js";

const lagoon = (input: string): number => {
  const path = Lagoon.asPath(Lagoon.parseDec(input));

  return Lagoon.calcArea(path) + Lagoon.calcPerimeter(path) + 1;
};

exercise(lagoon, [
  [[TestCase], 62],
  [[UserCase], 108909],
]);
