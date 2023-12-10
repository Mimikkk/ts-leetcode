import { exercise } from "@shared/utilities/exercise.js";
import ComplexTestCase from "./10-pipe-maze.easy-complex-case.txt?raw";
import SimpleTestCase from "./10-pipe-maze.easy-simple-case.txt?raw";
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
}

namespace Position {
  export const up = ([i, j]: Position, map: Maze): Tile => map[i - 1][j] ?? Tile.Ground;
  export const down = ([i, j]: Position, map: Maze): Tile => map[i + 1][j] ?? Tile.Ground;
  export const left = ([i, j]: Position, map: Maze): Tile => map[i]?.[j - 1] ?? Tile.Ground;
  export const right = ([i, j]: Position, map: Maze): Tile => map[i]?.[j + 1] ?? Tile.Ground;

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
  export const hash = ([i, j]: Position): number => i * 1e8 + j;
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
    [Tile.BottomLeftCorner]: [Direction.up, Direction.right],
    [Tile.BottomRightCorner]: [Direction.up, Direction.left],
    [Tile.TopLeftCorner]: [Direction.down, Direction.right],
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

  const queue: [Position, Direction[], number][] = [[start, Tile.directions[startTile], 0]];
  const visited = new Set<number>();
  visited.add(Position.hash(start));

  const { n, m } = map;
  const depths = Array(n)
    .fill(undefined)
    .map(() => Array(m).fill(Infinity));

  while (queue.length) {
    let [position, directions, depth] = queue.shift()!;

    const [i, j] = position;
    if (depths[i][j] > depth) depths[i][j] = depth;

    for (const [x, y] of directions) {
      const xi = i + x;
      const yj = j + y;

      const hash = Position.hash([xi, yj]);
      if (visited.has(hash)) continue;
      visited.add(hash);

      queue.push([[xi, yj], Tile.directions[map[xi][yj]], depth + 1]);
    }
  }

  let maxDepth = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (depths[i][j] !== Infinity && depths[i][j] > maxDepth) maxDepth = depths[i][j];
    }
  }

  return maxDepth;
};

exercise(maze, [
  [[SimpleTestCase], 4],
  [[ComplexTestCase], 8],
  [[UserCase], 6897],
]);
