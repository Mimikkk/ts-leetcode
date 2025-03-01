import { exercise } from "@shared/utilities/exercise.ts";
const UserCase = await Deno.readTextFile("./day-22-slabs.user.txt");
const TestCase = await Deno.readTextFile("./day-22-slabs.case.txt");
import { count } from "../utils/utils.ts";
import { Slabs } from "./day-22-slabs.utils.ts";

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
