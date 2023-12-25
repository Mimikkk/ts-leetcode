import { exercise } from "@shared/utilities/exercise.js";
import UserCase from "./day-22-slabs.user.txt?raw";
import { count } from "../utils/utils.js";
import { Slabs } from "./day-22-slabs.utils.js";

const slabs = (input: string): number => {
  const [map, bricks] = Slabs.fall(Slabs.parse(input));
  const byId = Object.fromEntries(bricks.map((brick) => [brick.id, brick]));

  return bricks.flatMap((brick) => Slabs.supports(map, byId, brick)).reduce((a, b) => a + b, 0);
};

exercise(slabs, [[[UserCase], 63491]]);
