export type Position = [number, number];
export enum Cell {
  Empty = ".",
  Galaxy = "#",
}

export const parse = (input: string): string[][] =>
  input
    .split(/\r?\n/)
    .filter((line) => line)
    .map((line) => line.split(""));

export const findGalaxies = (map: string[][], extraDistance: number): Position[] => {
  const {
    0: { length: m },
    length: n,
  } = map;

  const galaxies: Position[] = [];
  for (let i = 0; i < n; ++i) for (let j = 0; j < m; ++j) if (map[i][j] === Cell.Galaxy) galaxies.push([j, i]);

  const emptyRowIndexes: number[] = [];
  here: for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) if (map[i][j] === Cell.Galaxy) continue here;
    emptyRowIndexes.push(i);
  }

  const emptyColumnIndexes: number[] = [];
  here: for (let j = 0; j < m; ++j) {
    for (let i = 0; i < n; ++i) if (map[i][j] === Cell.Galaxy) continue here;
    emptyColumnIndexes.push(j);
  }

  for (let galaxy of galaxies) {
    const [x, y] = galaxy;

    const nx = emptyColumnIndexes.filter((index) => index < x).length;
    galaxy[0] += (extraDistance - 1) * nx;

    const ny = emptyRowIndexes.filter((index) => index < y).length;
    galaxy[1] += (extraDistance - 1) * ny;
  }

  return galaxies;
};

export const manhattan = ([x1, y1]: Position, [x2, y2]: Position): number => Math.abs(x1 - x2) + Math.abs(y1 - y2);
