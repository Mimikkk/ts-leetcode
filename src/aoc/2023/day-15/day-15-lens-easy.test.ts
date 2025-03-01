import { exercise } from "@shared/utilities/exercise.ts";
const UserCase = await Deno.readTextFile("./day-15-lens.user.txt");
const TestCase = await Deno.readTextFile("./day-15-lens.case.txt");
import { Lens } from "./day-15-lens.utils.ts";

const lens = (input: string): number =>
  Lens.parse(input)
    .map(Lens.hash)
    .reduce((a, b) => a + b, 0);

exercise(lens, [
  [["HASH"], 52],
  [[TestCase], 1320],
  [[UserCase], 514025],
]);
