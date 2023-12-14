import { exercise } from "@shared/utilities/exercise.js";
import UserCase from "./day-13-points.user.txt?raw";
import TestCase from "./day-13-points.case.txt?raw";
import { Pattern } from "./day-13-points.utils.js";

const points = (input: string): number =>
  Pattern.parse(input)
    .map((pattern) => Pattern.score(pattern, 0))
    .reduce((sum, curr) => sum + curr, 0);

exercise(points, [
  [[TestCase], 405],
  [[UserCase], 30487],
]);
