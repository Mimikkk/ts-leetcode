import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./day-13-points.case.txt?raw";
import UserCase from "./day-13-points.user.txt?raw";
import { Points } from "./day-13-points.utils.js";

const points = (input: string): number => {
  console.log(Points.parse(input));

  return 0;
};

exercise(points, [
  [[TestCase], 374],
  // [[UserCase], 9647174],
]);
