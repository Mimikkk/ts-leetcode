import { exercise } from "@shared/utilities/exercise.ts";
const UserCase = await Deno.readTextFile("./day-14-dish.user.txt");
const TestCase = await Deno.readTextFile("./day-14-dish.case.txt");
import { Dish } from "./day-14-dish.utils.ts";

const { scoreLoad, cycles, parse } = Dish;
const dish = (input: string): number => scoreLoad(cycles(parse(input), 1_000_000_000));

exercise(dish, [
  [[TestCase], 64],
  [[UserCase], 106689],
]);
