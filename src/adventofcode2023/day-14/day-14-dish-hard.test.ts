import { exercise } from "@shared/utilities/exercise.js";
import UserCase from "./day-14-dish.user.txt?raw";
import TestCase from "./day-14-dish.case.txt?raw";
import { Dish } from "./day-14-dish.utils.js";

const { scoreLoad, cycles, parse } = Dish;
const dish = (input: string): number => scoreLoad(cycles(parse(input), 1_000_000_000));

exercise(dish, [
  [[TestCase], 64],
  [[UserCase], 108955],
]);
