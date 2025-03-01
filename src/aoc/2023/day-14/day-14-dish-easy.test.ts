import { exercise } from "@shared/utilities/exercise.ts";
const UserCase = await Deno.readTextFile("./day-14-dish.user.txt");
const TestCase = await Deno.readTextFile("./day-14-dish.case.txt");
import { Dish } from "./day-14-dish.utils.ts";

const { scoreLoad, tilt, parse } = Dish;
const dish = (input: string): number => scoreLoad(tilt(parse(input), "north"));

exercise(dish, [
  [[TestCase], 136],
  [[UserCase], 108955],
]);
