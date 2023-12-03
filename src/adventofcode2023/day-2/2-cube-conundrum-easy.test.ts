import { exercise } from "@shared/utilities/exercise.js";

import TestCase from "./2-cube-conundrum.case.txt?raw";
import UserCase from "./2-cube-conundrum.user.txt?raw";

namespace Bag {
  export type Color = "red" | "green" | "blue";

  const counts: Record<Color, number> = { red: 12, green: 13, blue: 14 };
  export const isInvalid = (entries: [number, Color][]) => entries.some(([count, color]) => count > counts[color]);
}

const conundrum = (input: string): number => {
  const lines = input.split("\r\n").filter((Line) => Line);

  const bags = lines.map((line) =>
    line.match(/(\d+) (\w+)/g)!.map((x) => {
      const [count, color] = x.split(" ");
      return [+count, color];
    }),
  ) as [number, Bag.Color][][];

  let invalidIdSum = 0;

  for (let i = 0; i < bags.length; i++) {
    if (Bag.isInvalid(bags[i])) continue;
    invalidIdSum += i + 1;
  }

  return invalidIdSum;
};

exercise(conundrum, [
  [[TestCase], 8],
  [[UserCase], 2476],
]);
