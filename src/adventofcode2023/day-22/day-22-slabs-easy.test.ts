import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./day-22-slabs.case.txt?raw";
import UserCase from "./day-22-slabs.user.txt?raw";
import { count } from "../utils/utils.js";
import { Slabs } from "./day-22-slabs.utils.js";

const slabs = (input: string): number =>
  count(Slabs.fall(Slabs.parse(input)), (brick, _, bricks) => Slabs.canDisintegrate(bricks, brick));

exercise(slabs, [
  [[TestCase], 5],
  [[UserCase], 3617],
]);
