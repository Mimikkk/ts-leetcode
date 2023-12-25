import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./day-22-slabs.case.txt?raw";
import UserCase from "./day-22-slabs.user.txt?raw";
import { Slabs } from "./day-22-slabs.utils.js";

const slabs = (input: string): number =>
  Slabs.fall(Slabs.parse(input)).flatMap((brick, _, bricks) => Slabs.supports(bricks, brick)).length;

exercise(slabs, [
  [[TestCase], 5],
  [[UserCase], 3617],
]);
