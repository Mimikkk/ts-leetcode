import { exercise } from "@shared/utilities/exercise.ts";
const Test1Case = await Deno.readTextFile("./day-21-counter.case-1.txt");
const Test2Case = await Deno.readTextFile("./day-21-counter.case-2.txt");
const UserCase = await Deno.readTextFile("./day-21-counter.user.txt");
import { Counter } from "./day-21-counter.utils.ts";
import { Position } from "../day-10/10-pipe-maze.utils.ts";

const counter = (input: string, steps: number): number => {
  const [start, map] = Counter.parse(input);

  let level: Position[] = [start];

  const hash = ([x, y]: Position) => `${x},${y}`;
  for (let i = 0; i < steps; ++i) {
    const hashes = new Set<string>();
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
