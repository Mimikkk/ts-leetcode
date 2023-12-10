import { exercise } from "@shared/utilities/exercise.js";
import SimpleTestCase from "./10-pipe-maze.easy-simple-case.txt?raw";
import Complex1TestCase from "./10-pipe-maze.hard-1-case.txt?raw";
import Complex2TestCase from "./10-pipe-maze.hard-2-case.txt?raw";
import Complex3TestCase from "./10-pipe-maze.hard-3-case.txt?raw";
import Complex4TestCase from "./10-pipe-maze.hard-4-case.txt?raw";
import UserCase from "./10-pipe-maze.user.txt?raw";

type Maze = Tile[][] & { n: number; m: number };
namespace Maze {
  export const parse = (input: string): Maze => {
    const map = <Maze>input
      .split(/\r?\n/)
      .filter((line) => line)
      .map((line) => line.split(""));
    map.n = map.length;
    map.m = map[0].length;

    return map;
  };

  export const findStart = (map: Maze): Position => {
    const { n, m } = map;

    for (let i = 0, it = n; i < it; ++i) {
      for (let j = 0, jt = m; j < jt; ++j) {
        if (map[i][j] === Tile.Start) return [i, j];
      }
    }

    throw Error("Invalid map: no start found");
  };
}

type Position = [number, number];
type Direction = Position;
namespace Direction {
  export const up: Direction = [-1, 0];
  export const down: Direction = [1, 0];
  export const left: Direction = [0, -1];
  export const right: Direction = [0, 1];

  const nameMap = new Map([
    [up, "up"],
    [down, "down"],
    [left, "left"],
    [right, "right"],
  ]);

  export const name = (direction: Direction): string => {
    const x = nameMap.get(direction)!;
    if (x) return x;

    for (const [key, value] of nameMap.entries()) {
      if (key[0] === direction[0] && key[1] === direction[1]) return value;
    }

    return "unknown";
  };
  export const names = (directions: Direction[]): string[] => directions.map(name);
}

namespace Position {
  export const up = ([i, j]: Position, map: Maze): Tile => map[i - 1]?.[j] ?? Tile.Ground;
  export const down = ([i, j]: Position, map: Maze): Tile => map[i + 1]?.[j] ?? Tile.Ground;
  export const left = ([i, j]: Position, map: Maze): Tile => map[i][j - 1] ?? Tile.Ground;
  export const right = ([i, j]: Position, map: Maze): Tile => map[i][j + 1] ?? Tile.Ground;

  export const canUp = (position: Position, map: Maze): boolean => {
    const tile = up(position, map);

    return tile === Tile.VerticalPipe || tile === Tile.TopLeftCorner || tile === Tile.TopRightCorner;
  };
  export const canDown = (position: Position, map: Maze): boolean => {
    const tile = down(position, map);

    return tile === Tile.VerticalPipe || tile === Tile.BottomLeftCorner || tile === Tile.BottomRightCorner;
  };
  export const canLeft = (position: Position, map: Maze): boolean => {
    const tile = left(position, map);

    return tile === Tile.HorizontalPipe || tile === Tile.TopLeftCorner || tile === Tile.BottomLeftCorner;
  };
  export const canRight = (position: Position, map: Maze): boolean => {
    const tile = right(position, map);

    return tile === Tile.HorizontalPipe || tile === Tile.TopRightCorner || tile === Tile.BottomRightCorner;
  };
}

enum Tile {
  VerticalPipe = "|",
  HorizontalPipe = "-",
  BottomLeftCorner = "L",
  BottomRightCorner = "J",
  TopRightCorner = "7",
  TopLeftCorner = "F",
  Ground = ".",
  Start = "S",
}

namespace Tile {
  export const directions: Record<Tile, Direction[]> = {
    [Tile.VerticalPipe]: [Direction.up, Direction.down],
    [Tile.HorizontalPipe]: [Direction.left, Direction.right],
    [Tile.BottomLeftCorner]: [Direction.right, Direction.up],
    [Tile.BottomRightCorner]: [Direction.up, Direction.left],
    [Tile.TopLeftCorner]: [Direction.right, Direction.down],
    [Tile.TopRightCorner]: [Direction.down, Direction.left],
    [Tile.Ground]: [],
    [Tile.Start]: [],
  };

  export const infer = (position: Position, map: Maze): Tile => {
    const canUp = Position.canUp(position, map);
    const canDown = Position.canDown(position, map);
    const canLeft = Position.canLeft(position, map);
    const canRight = Position.canRight(position, map);

    if (canUp) {
      if (canDown) return Tile.VerticalPipe;
      if (canLeft) return Tile.BottomRightCorner;
      if (canRight) return Tile.BottomLeftCorner;
    }
    if (canDown) {
      if (canRight) return Tile.TopLeftCorner;
      if (canLeft) return Tile.TopRightCorner;
    }
    if (canLeft && canRight) return Tile.HorizontalPipe;

    return Tile.Ground;
  };
}

const maze = (input: string): number => {
  const map = Maze.parse(input);

  const start = Maze.findStart(map);
  const startTile = Tile.infer(start, map);
  map[start[0]][start[1]] = startTile;

  const queue: [Position, Direction[], number][] = [[start, Tile.directions[startTile], 0]];
  const { n, m } = map;

  const path: Position[] = [];

  const visit = Array(n)
    .fill(undefined)
    .map(() => Array(m).fill(Infinity));

  while (queue.length) {
    let [position, directions, depth] = queue.pop()!;

    const [i, j] = position;
    if (visit[i][j] !== Infinity) continue;
    visit[i][j] = depth;
    path.push(position);

    for (const [x, y] of directions) {
      const xi = i + x;
      const yj = j + y;

      if (visit[xi][yj] !== Infinity) continue;

      queue.push([[xi, yj], Tile.directions[map[xi][yj]], depth + 1]);
    }
  }

  let area = 0;
  for (let i = 0, it = path.length; i < it; ++i) {
    const [x1, y1] = path[i];
    const [x2, y2] = path[(i + 1) % it];

    area += x1 * y2 - x2 * y1;
  }

  area = Math.abs(area) >> 1;

  return area - (path.length >>> 1) + 1;
};

exercise(maze, [
  [[SimpleTestCase], 1],
  [[Complex1TestCase], 18],
  [[Complex2TestCase], 8],
  [[Complex3TestCase], 10],
  [[Complex4TestCase], 4],
  [[UserCase], 367],
]);
