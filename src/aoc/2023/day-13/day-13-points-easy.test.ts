import { exercise } from "@shared/utilities/exercise.ts";
const UserCase = await Deno.readTextFile("./day-13-points.user.txt");
const TestCase = await Deno.readTextFile("./day-13-points.case.txt");
import { Pattern } from "./day-13-points.utils.ts";

const points = (input: string): number =>
  Pattern.parse(input)
    .map((pattern) => Pattern.score(pattern, 0))
    .reduce((sum, curr) => sum + curr, 0);

exercise(points, [
  [[TestCase], 405],
  [[UserCase], 30487],
]);
