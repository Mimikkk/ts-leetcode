import { exercise } from "@shared/utilities/exercise.js";
import UserCase from "./day-22-slabs.user.txt?raw";
import TestCase from "./day-22-slabs.case.txt?raw";
import { count } from "../utils/utils.js";
import { Slabs } from "./day-22-slabs.utils.js";

const slabs = (input: string): number => {
  const bricks = Slabs.parse(input);
  const byId = Slabs.group(bricks);
  const byVec = Slabs.fall(bricks);

  const result = count(bricks, (brick) => Slabs.canDisintegrate(brick, byId, byVec));
  Slabs.Brick.topIds.clear();
  Slabs.Brick.underIds.clear();
  return result;
};

exercise(slabs, [
  [[TestCase], 5],
  [[UserCase], 401],
]);
