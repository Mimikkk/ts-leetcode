import { Heap } from "heap-js";
import { createMatrix } from "../utils/utils.js";

export namespace Crucible {
  export type Position = [number, number];
  export type Direction = "left" | "right" | "up" | "down";
  export type Map = number[][] & { n: number; m: number };

  export const parse = (input: string) => {
    const map = <Map>input.split(/\r?\n/).map((x) => x.split("").map((x) => +x));
    map.n = map.length;
    map.m = map[0].length;
    return map;
  };
  const neighbours: Record<Direction, [Position, Direction]> = {
    left: [[0, -1], "left"],
    right: [[0, 1], "right"],
    up: [[-1, 0], "up"],
    down: [[1, 0], "down"],
  };

  const directions: Record<Direction, [Position, Direction][]> = {
    left: [neighbours.up, neighbours.down],
    right: [neighbours.up, neighbours.down],
    up: [neighbours.left, neighbours.right],
    down: [neighbours.left, neighbours.right],
  };

  export const search = (grid: Map, minSteps: number, maxSteps: number) => {
    const { n, m } = grid;
    const records = createMatrix(n, m, () => new Map<string, number>());
    const costOf = (x: number, y: number, direction: Direction) => records[x][y].get(direction) ?? Infinity;

    const heap = new Heap<[number, Position, Direction]>(([a], [b]) => a - b);

    let start: Position = [0, 0];
    heap.push([0, start, "right"]);
    heap.push([0, start, "down"]);

    while (heap.size()) {
      let [cost, [x, y], direction] = heap.pop()!;
      if (x === n - 1 && y === m - 1) return cost;

      if (cost > costOf(x, y, direction)) continue;

      for (let [[i, j], dir] of directions[direction]) {
        let nextCost = cost;

        for (let step = 1; step <= maxSteps; ++step) {
          const xi = x + i * step;
          const yj = y + j * step;
          if (0 > xi || xi >= n || 0 > yj || yj >= m) continue;

          nextCost += grid[xi][yj];
          if (step < minSteps) continue;

          if (nextCost >= costOf(xi, yj, dir)) continue;
          records[xi][yj].set(dir, nextCost);

          heap.push([nextCost, [xi, yj], dir]);
        }
      }
    }

    return Infinity;
  };
}
