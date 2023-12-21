import { exercise } from "@shared/utilities/exercise.js";
import Test3Case from "./day-21-counter.case-3.txt?raw";
import Test4Case from "./day-21-counter.case-4.txt?raw";
import { Counter } from "./day-21-counter.utils.js";
import { Position } from "../day-10/10-pipe-maze.utils.js";
import { withColors } from "../utils/utils.js";

const counter = (input: string, steps: number): number => {
  const [start, map] = Counter.parse(input);

  let level: Position[] = [start];

  const hash = ([x, y]: Position) => x * 1e8 + y;
  for (let i = 0; i < steps; ++i) {
    const hashes = new Set();
    const next = [];

    while (level.length) {
      const position = level.shift()!;

      for (const move of Counter.loopingMovement(map, position)) {
        const key = hash(move);
        if (hashes.has(key)) continue;
        hashes.add(key);

        next.push(move);
      }
    }

    console.log(
      withColors(
        map,
        next.map(([x, y]) => [x, y, "red"]),
      ),
    );

    level = next;
  }
  console.log(level);

  return level.length;
};

exercise(counter, [
  [[Test3Case, 1], 1],
  [[Test3Case, 2], 1],
  [[Test4Case, 1], 1],
  // [[UserCase, 64], 3617],
]);
