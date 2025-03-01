import { exercise } from "@shared/utilities/exercise.ts";
const TestCase = await Deno.readTextFile("./4-scratchcards.case.txt");
const UserCase = await Deno.readTextFile("./4-scratchcards.user.txt");

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
    .map((size) => [1, size])
    .reduce((acc, [count, matches], i, cards) => {
      for (let j = 0; j < matches; ++j) cards[j + i + 1][0] += count;
      return acc + count;
    }, 0);

exercise(scratchCards, [
  [[TestCase], 30],
  [[UserCase], 11787590],
]);
