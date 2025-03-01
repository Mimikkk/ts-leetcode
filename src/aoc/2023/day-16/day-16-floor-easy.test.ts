import { exercise } from "@shared/utilities/exercise.ts";
const TestCase = await Deno.readTextFile("./day-16-floor.case.txt");
const UserCase = await Deno.readTextFile("./day-16-floor.user.txt");
import { Floor } from "./day-16-floor.utils.ts";

const floor = (input: string): number => Floor.explore(Floor.parse(input), [[0, 0], "right"]);

exercise(floor, [
  [[TestCase], 46],
  [[UserCase], 7798],
]);
