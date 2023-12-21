import { exercise } from "@shared/utilities/exercise.js";
import Test1Case from "./day-21-counter.case-1.txt?raw";
import Test2Case from "./day-21-counter.case-2.txt?raw";
import UserCase from "./day-21-counter.user.txt?raw";
import { Counter } from "./day-21-counter.utils.js";
import { Position } from "../day-10/10-pipe-maze.utils.js";

const counter = (input: string, steps: number): number => {
  const [start, map] = Counter.parse(input);

  let level: Position[] = [start];

  const hash = ([x, y]: Position) => x * 1e8 + y;
  for (let i = 0; i < steps; ++i) {
    const hashes = new Set();
    const next = [];

    while (level.length) {
      const position = level.shift()!;

      for (const move of Counter.movement(map, position)) {
        const key = hash(move);
        if (hashes.has(key)) continue;
        hashes.add(key);

        next.push(move);
      }
    }

    level = next;
  }

  return level.length;
};

exercise(counter, [
  [[Test1Case, 6], 5],
  [[Test2Case, 6], 16],
  [[UserCase, 64], 3617],
]);
