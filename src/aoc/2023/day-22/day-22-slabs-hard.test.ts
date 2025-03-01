import { exercise } from "@shared/utilities/exercise.ts";
const UserCase = await Deno.readTextFile("./day-22-slabs.user.txt");
import { count } from "../utils/utils.ts";
import { Slabs } from "./day-22-slabs.utils.ts";

const slabs = (input: string): number => {
  const bricks = Slabs.parse(input);
  const byId = Slabs.group(bricks);
  const byVec = Slabs.fall(bricks);

  const count = bricks.map((brick) => Slabs.countSupported(brick, byId, byVec)).reduce((a, b) => a + b, 0);
  Slabs.Brick.topIds.clear();
  Slabs.Brick.underIds.clear();
  return count;
};

exercise(slabs, [[[UserCase], 63491]]);
