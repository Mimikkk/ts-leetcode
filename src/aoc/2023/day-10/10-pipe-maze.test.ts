import { createDay } from '../../utils/createDay.ts';
import { Str } from '../../utils/ns/str.ts';

enum Tile {
  Vertical = '|',
  Horizontal = '-',
  BottomLeft = 'L',
  BottomRight = 'J',
  TopRight = '7',
  TopLeft = 'F',
  Ground = '.',
  Start = 'S',
}

type Vec2 = [x: number, y: number];
enum Direction {
  North = 'north',
  South = 'south',
  East = 'east',
  West = 'west',
}

namespace Direction {
  export const list: Direction[] = [Direction.East, Direction.West, Direction.North, Direction.South];
}

const directions: Record<Direction, Vec2> = {
  [Direction.North]: [-1, 0],
  [Direction.South]: [1, 0],
  [Direction.East]: [0, 1],
  [Direction.West]: [0, -1],
};

const findNextDirection = (direction: Direction, towards: Tile): Direction | undefined => {
  if (direction === Direction.North && towards === Tile.Vertical) return Direction.North;
  if (direction === Direction.South && towards === Tile.Vertical) return Direction.South;

  if (direction === Direction.East && towards === Tile.Horizontal) return Direction.East;
  if (direction === Direction.West && towards === Tile.Horizontal) return Direction.West;

  if (direction === Direction.South && towards === Tile.BottomLeft) return Direction.East;
  if (direction === Direction.West && towards === Tile.BottomLeft) return Direction.North;

  if (direction === Direction.South && towards === Tile.BottomRight) return Direction.West;
  if (direction === Direction.East && towards === Tile.BottomRight) return Direction.North;

  if (direction === Direction.North && towards === Tile.TopLeft) return Direction.East;
  if (direction === Direction.West && towards === Tile.TopLeft) return Direction.South;

  if (direction === Direction.North && towards === Tile.TopRight) return Direction.West;
  if (direction === Direction.East && towards === Tile.TopRight) return Direction.South;

  return undefined;
};

const findFirstDirection = (map: Tile[][], start: Vec2): Direction | undefined => {
  for (const direction of Direction.list) {
    const [sx, sy] = start;
    const [dx, dy] = directions[direction];
    const nx = sx + dx;
    const ny = sy + dy;
    const tile = map[nx]?.[ny] ?? Tile.Ground;
    const nextDirection = findNextDirection(direction, tile);

    if (nextDirection === undefined) continue;
    return direction;
  }
};

type Input = { map: Tile[][]; start: Vec2; direction: Direction };
const prepare = (input: string): Input => {
  const map = Str.trimlines(input).map((s) => s.split('')) as Tile[][];
  let start: Vec2 | undefined;

  for (let x = 0; x < map.length; ++x) {
    for (let y = 0; y < map[x].length; ++y) {
      if (map[x][y] === Tile.Start) {
        start = [x, y];
      }
    }
  }

  if (!start) throw Error('Start not found');

  const direction = findFirstDirection(map, start);
  if (!direction) throw Error('Direction not found');

  return { map, start, direction };
};

const walk = ({ direction, map, start: [px, py] }: Input, onStep: (x: number, y: number) => void): void => {
  while (direction) {
    const [ox, oy] = directions[direction];
    px += ox;
    py += oy;

    direction = findNextDirection(direction, map[px][py])!;
    onStep(px, py);
  }
};

const easy = (input: Input): number => {
  let depth = 0;

  walk(input, () => ++depth);

  return depth / 2;
};

const calculateArea = (positions: Vec2[]): number => {
  const n = positions.length;
  let area = 0;
  for (let i = 0; i < n; ++i) {
    const [x1, y1] = positions[i];
    const [x2, y2] = positions[(i + 1) % n];

    area += x1 * y2 - x2 * y1;
  }
  return Math.abs(area) / 2;
};

const calculateInnerArea = (positions: Vec2[]): number => calculateArea(positions) - positions.length / 2 + 1;

const hard = (input: Input): number => {
  const positions: Vec2[] = [];

  walk(input, (x, y) => positions.push([x, y]));

  return calculateInnerArea(positions);
};

createDay({
  easy: {
    cases: {
      simple: {
        input: 'file:10-pipe-maze.easy-simple-case',
        result: 4,
      },
      complex: {
        input: 'file:10-pipe-maze.easy-complex-case',
        result: 8,
      },
      user: {
        input: 'file:10-pipe-maze.user',
        result: 6897,
      },
    },
    prepare,
    solve: easy,
  },
  hard: {
    cases: {
      simple: {
        input: 'file:10-pipe-maze.easy-simple-case',
        result: 1,
      },
      complex1: {
        input: 'file:10-pipe-maze.hard-1-case',
        result: 18,
      },
      complex2: {
        input: 'file:10-pipe-maze.hard-2-case',
        result: 8,
      },
      complex3: {
        input: 'file:10-pipe-maze.hard-3-case',
        result: 10,
      },
      complex4: {
        input: 'file:10-pipe-maze.hard-4-case',
        result: 4,
      },
      user: {
        input: 'file:10-pipe-maze.user',
        result: 367,
      },
    },
    prepare,
    solve: hard,
  },
});
