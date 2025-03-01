export namespace Dish {
  export enum Cell {
    RoundRock = "O",
    CubeRock = "#",
    Empty = ".",
  }

  type Map = Cell[][];

  export const parse = (input: string): Map => <Map>input
      .split(/\r?\n/)
      .filter((line) => line)
      .map((line) => line.split(""));

  const transpose = (map: Map): Map => map[0].map((_, i) => map.map((_, j) => map[j][i]));

  const moveRoundRock = (map: Map, i: number, j: number, increment: boolean): void => {
    if (map[i][j] === Cell.RoundRock) {
      let k = increment ? j + 1 : j - 1;
      const condition = increment ? k < map[i].length : k >= 0;
      const operation = increment ? () => ++k : () => --k;

      while (condition) {
        if (map[i][k] !== Cell.Empty) break;
        operation();
      }

      map[i][j] = Cell.Empty;
      map[i][increment ? k - 1 : k + 1] = Cell.RoundRock;
    }
  };

  const tiltNorth = (map: Map): Map => {
    map = transpose(map);
    for (let i = 0, it = map.length, jt = map[0].length; i < it; ++i) {
      for (let j = 0; j < jt; ++j) moveRoundRock(map, i, j, false);
    }
    return transpose(map);
  };

  const tiltSouth = (map: Map): Map => {
    map = transpose(map);
    for (let i = 0, it = map.length, jt = map[0].length; i < it; ++i) {
      for (let j = jt - 1; j >= 0; --j) moveRoundRock(map, i, j, true);
    }
    return transpose(map);
  };

  const tiltWest = (map: Map): Map => {
    for (let i = 0, it = map.length, jt = map[0].length; i < it; ++i) {
      for (let j = 0; j < jt; ++j) moveRoundRock(map, i, j, false);
    }
    return map;
  };

  const tiltEast = (map: Map): Map => {
    for (let i = 0, it = map.length, jt = map[0].length; i < it; ++i) {
      for (let j = jt - 1; j >= 0; --j) moveRoundRock(map, i, j, true);
    }
    return map;
  };

  export const tilt = (map: Map, direction: "north" | "east" | "south" | "west"): Map => {
    switch (direction) {
      case "north":
        return tiltNorth(map);
      case "east":
        return tiltEast(map);
      case "south":
        return tiltSouth(map);
      case "west":
        return tiltWest(map);
    }
  };

  const tilts = ["north", "west", "south", "east"] as const;
  export const cycle = (map: Map): Map => tilts.reduce(tilt, map);
  export const cycles = (map: Map, times: number): Map => {
    const cycleAt = new Map<string, number>();
    let i = 0;

    while (i < times) {
      const hashValue = hash(map);
      if (cycleAt.has(hashValue)) {
        const cycleLength = i - cycleAt.get(hashValue)!;
        const remaining = (times - i) % cycleLength;
        return cycles(map, remaining);
      }
      cycleAt.set(hashValue, i);
      map = cycle(map);
      ++i;
    }

    return map;
  };

  const hash = (map: Map): string => map.map((line) => line.join("")).join("\n");

  export const scoreLoad = (map: Map): number => {
    let score = 0;

    for (let i = 0, it = map.length, jt = map[0].length; i < it; ++i) {
      for (let j = 0; j < jt; ++j) if (map[i][j] === Cell.RoundRock) score += it - i;
    }

    return score;
  };
}
