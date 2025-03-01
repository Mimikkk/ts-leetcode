import { exercise } from "@shared/utilities/exercise.ts";
const TestCase = await Deno.readTextFile("./day-18-lagoon.case.txt");
const UserCase = await Deno.readTextFile("./day-18-lagoon.user.txt");
import { Lagoon } from "./day-18-lagoon.utils.ts";

const lagoon = (input: string): number => {
  const path = Lagoon.asPath(Lagoon.parseHex(input));

  return Lagoon.calcArea(path) + Lagoon.calcPerimeter(path) + 1;
};

exercise(lagoon, [
  [[TestCase], 952408144115],
  [[UserCase], 133125706867777],
]);
