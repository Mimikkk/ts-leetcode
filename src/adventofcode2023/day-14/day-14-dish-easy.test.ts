import { exercise } from "@shared/utilities/exercise.js";
import UserCase from "./day-14-dish.user.txt?raw";
import TestCase from "./day-14-dish.case.txt?raw";
import { Dish } from "./day-14-dish.utils.js";

const { scoreLoad, tilt, parse } = Dish;
const dish = (input: string): number => scoreLoad(tilt(parse(input), "north"));

exercise(dish, [
  [[TestCase], 136],
  [[UserCase], 108955],
]);
