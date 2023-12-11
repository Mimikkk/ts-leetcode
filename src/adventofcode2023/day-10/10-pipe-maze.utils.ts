export type Position = [number, number];
export type Maze = Tile[][] & { n: number; m: number };
export namespace Maze {
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

  interface SearchResult {
    position: Position;
    directions: Direction[];
    depth: number;
  }

  export const searchDepth = (map: Maze, start: Position, fn: (result: SearchResult) => void): boolean[][] => {
    const [x, y] = start;
    const queue: [Position, Direction[], number][] = [[start, Tile.directions[map[x][y]], 0]];

    const visits = createMatrix(map.n, map.m, false);
    visits[x][y] = true;

    while (queue.length) {
      let [position, directions, depth] = queue.pop()!;

      const [i, j] = position;
      fn({ position, directions, depth });

      for (const [x, y] of directions) {
        const xi = i + x;
        const yj = j + y;

        if (visits[xi][yj]) continue;
        visits[i][j] = true;

        queue.push([[xi, yj], Tile.directions[map[xi][yj]], depth + 1]);
      }
    }

    return visits;
  };

  export const searchBreadth = (map: Maze, start: Position, fn: (result: SearchResult) => void): boolean[][] => {
    const [x, y] = start;
    const queue: [Position, Direction[], number][] = [[start, Tile.directions[map[x][y]], 0]];

    const visits = createMatrix(map.n, map.m, false);
    visits[x][y] = true;

    while (queue.length) {
      const [position, directions, depth] = queue.shift()!;
      const [i, j] = position;

      fn({ position, directions, depth });

      for (const [x, y] of directions) {
        const xi = x + i;
        const yj = y + j;

        if (visits[xi][yj]) continue;
        visits[xi][yj] = true;

        queue.push([[xi, yj], Tile.directions[map[xi][yj]], depth + 1]);
      }
    }

    return visits;
  };
}

export type Direction = Position;
export namespace Direction {
  export const up: Direction = [-1, 0];
  export const down: Direction = [1, 0];
  export const left: Direction = [0, -1];
  export const right: Direction = [0, 1];
}

export namespace Position {
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

export enum Tile {
  VerticalPipe = "|",
  HorizontalPipe = "-",
  BottomLeftCorner = "L",
  BottomRightCorner = "J",
  TopRightCorner = "7",
  TopLeftCorner = "F",
  Ground = ".",
  Start = "S",
}

export namespace Tile {
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

export const createMatrix = <T>(n: number, m: number, value: T): T[][] =>
  Array(n)
    .fill(undefined)
    .map(() => Array(m).fill(value));
