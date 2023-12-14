import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./day-13-points.case.txt?raw";
import { Pattern } from "./day-13-points.utils.js";

const points = (input: string): number =>
  Pattern.parse(input)
    .map((pattern) => Pattern.score(pattern, 1))
    .reduce((sum, curr) => sum + curr, 0);

exercise(points, [
  [[TestCase], 400],
  // [[UserCase], 31954],
]);
