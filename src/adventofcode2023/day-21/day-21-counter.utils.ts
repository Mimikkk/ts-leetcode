export namespace Counter {
  type Position = [number, number];
  type Map = Cell[][] & { n: number; m: number };

  enum Cell {
    Garden = ".",
    Rock = "#",
  }

  const neighbours: Position[] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  export const movement = function* (map: Map, [x, y]: Position): Generator<Position> {
    for (const [i, J] of neighbours) {
      const xi = x + i;
      const yj = y + J;

      if (xi < 0 || xi >= map.n || yj < 0 || yj >= map.m) continue;
      if (map[xi][yj] === Cell.Rock) continue;
      yield [xi, yj];
    }
  };

  export const loopingMovement = function* (map: Map, [x, y]: Position): Generator<Position> {
    // looping means that we can go out of bounds and come back in from the other side of the map

    for (const [i, J] of neighbours) {
      let xi = x + i;
      let yj = y + J;

      if (xi > map.n) xi = xi % map.n;
      else if (xi < 0) xi = map.n + xi;
      if (yj > map.m) yj = yj % map.m;
      else if (yj < 0) yj = map.m + yj;
      if (map[xi][yj] === Cell.Rock) continue;

      yield [xi, yj];
    }
  };

  export const parse = (input: string): [Position, Map] => {
    const map = input.split(/\r?\n/).map((line) => line) as string[] & { n: number; m: number };
    map.n = map.length;
    map.m = map[0].length;
    const { n, m } = map;

    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < m; ++j) {
        if (map[i][j] === "S") {
          map[i] = map[i].replace("S", Cell.Garden);
          return [[i, j], map as unknown as Map];
        }
      }
    }

    throw Error("No starting position found");
  };
}
