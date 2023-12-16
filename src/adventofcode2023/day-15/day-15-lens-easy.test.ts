import { exercise } from "@shared/utilities/exercise.js";
import UserCase from "./day-15-lens.user.txt?raw";
import TestCase from "./day-15-lens.case.txt?raw";

const parse = (input: string) =>
  input
    .split(/\r?\n/)
    .filter((line) => line)
    .flatMap((line) => line.split(","));

const lens = (input: string): number =>
  parse(input)
    .map((word) =>
      word
        .split("")
        .map((x) => x.charCodeAt(0))
        .reduce((sum, curr) => ((sum + curr) * 17) % 256, 0),
    )
    .reduce((sum, curr) => sum + curr, 0);

exercise(lens, [
  [["HASH"], 52],
  [[TestCase], 1320],
  [[UserCase], 514025],
]);
