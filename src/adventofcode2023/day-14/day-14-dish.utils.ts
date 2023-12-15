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

  export const tiltNorth = (map: Map): Map => {
    map = transpose(map);

    for (let i = 0, it = map.length, jt = map[0].length; i < it; ++i) {
      for (let j = 0; j < jt; ++j) {
        if (map[i][j] === Cell.RoundRock) {
          let k = j - 1;
          while (k >= 0) {
            if (map[i][k] !== Cell.Empty) break;
            --k;
          }

          map[i][j] = Cell.Empty;
          map[i][k + 1] = Cell.RoundRock;
        }
      }
    }

    return transpose(map);
  };

  export const scoreLoad = (map: Map): number => {
    let score = 0;

    for (let i = 0, it = map.length, jt = map[0].length; i < it; ++i) {
      for (let j = 0; j < jt; ++j) if (map[i][j] === Cell.RoundRock) score += it - i;
    }

    return score;
  };
}
