import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./4-scratchcards.case.txt?raw";
import UserCase from "./4-scratchcards.user.txt?raw";

const intersectionSize = ([a, b]: [Set<string>, Set<string>]): number => {
  let count = 0;
  for (let value of a) count += b.has(value) ? 1 : 0;
  return count;
};

const scratchCards = (input: string): number =>
  input
    .split("\n")
    .filter((line) => line)
    .map(
      (line) =>
        line
          .split(":")[1]
          .split("|")
          .map((x) => new Set(x.trim().split(/ +/))) as [Set<string>, Set<string>],
    )
    .map(intersectionSize)
    .reduce((a, b) => a + b, 0);

exercise(scratchCards, [
  [[TestCase], 13],
  [[UserCase], 18519],
]);
