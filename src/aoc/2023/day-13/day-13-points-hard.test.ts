import { exercise } from "@shared/utilities/exercise.ts";
const TestCase = await Deno.readTextFile("./day-13-points.case.txt");
import { Pattern } from "./day-13-points.utils.ts";

const points = (input: string): number =>
  Pattern.parse(input)
    .map((pattern) => Pattern.score(pattern, 1))
    .reduce((sum, curr) => sum + curr, 0);

exercise(points, [
  [[TestCase], 400],
  // [[UserCase], 31954],
]);
