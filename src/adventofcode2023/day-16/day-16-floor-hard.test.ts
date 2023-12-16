import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./day-16-floor.case.txt?raw";
import UserCase from "./day-16-floor.user.txt?raw";
import { createMatrix } from "../day-10/10-pipe-maze.utils.js";
import { Floor } from "./day-16-floor.utils.js";

const floor = (input: string): number => {
  const map = Floor.parse(input);
  const stack: [Floor.Position, Floor.Direction][] = [[[0, 0], "right"]];
  let visited = createMatrix(map.n, map.m, () => new Set<Floor.Direction>());
  visited[0][0].add("right");

  while (stack.length) {
    const {
      0: [x, y],
      0: position,
      1: direction,
    } = stack.pop()!;

    const directions = Floor.directionsOf(map, position, direction);
    for (const [[i, j], direction] of directions) {
      const xi = x + i;
      const yj = y + j;
      if (xi < 0 || xi >= map.n || yj < 0 || yj >= map.m) continue;
      if (visited[xi][yj].has(direction)) continue;
      visited[xi][yj].add(direction);

      stack.push([[xi, yj], direction]);
    }
  }

  let energized = 0;
  for (let i = 0, it = map.n, jt = map.m; i < it; i++) {
    for (let j = 0; j < jt; j++) if (visited[i][j].size) ++energized;
  }

  return energized;
};

exercise(floor, [
  [[TestCase], 51],
  [[UserCase], 8026],
]);
