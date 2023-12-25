import { exercise } from "@shared/utilities/exercise.js";
import UserCase from "./day-22-slabs.user.txt?raw";
import { count } from "../utils/utils.js";
import { Slabs } from "./day-22-slabs.utils.js";

const slabs = (input: string): number => {
  const bricks = Slabs.parse(input);
  const byId = Slabs.group(bricks);
  const byVec = Slabs.fall(bricks);

  return bricks.flatMap((brick) => Slabs.countSupported(brick, byId, byVec)).reduce((a, b) => a + b, 0);
};

exercise(slabs, [[[UserCase], 63491]]);
