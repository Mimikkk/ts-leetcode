import { createDay } from '../../utils/createDay.ts';
import { Str } from '../../utils/ns/str.ts';
import { Iter } from '../../utils/ns/iter.ts';

export type Position = [number, number];
const manhattan = ([x1, y1]: Position, [x2, y2]: Position): number => Math.abs(x1 - x2) + Math.abs(y1 - y2);

export enum Cell {
  Empty = '.',
  Galaxy = '#',
}

const prepare = (input: string): Cell[][] => Str.trimlines(input).map((line) => line.split('')) as Cell[][];

const findGalaxies = (map: Cell[][], padding: number): Position[] => {
  const n = map.length;
  const m = map[0].length;

  const galaxies: Position[] = [];
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (map[i][j] === Cell.Galaxy) galaxies.push([j, i]);
    }
  }

  const emptyRowIndices: number[] = [];
  outer: for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (map[i][j] === Cell.Galaxy) continue outer;
    }

    emptyRowIndices.push(i);
  }

  const emptyColumnIndices: number[] = [];
  outer: for (let j = 0; j < m; ++j) {
    for (let i = 0; i < n; ++i) {
      if (map[i][j] === Cell.Galaxy) continue outer;
    }

    emptyColumnIndices.push(j);
  }

  for (const galaxy of galaxies) {
    const [x, y] = galaxy;

    const nx = Iter.count(emptyColumnIndices, (i) => i < x);
    galaxy[0] += (padding - 1) * nx;

    const ny = Iter.count(emptyRowIndices, (i) => i < y);
    galaxy[1] += (padding - 1) * ny;
  }

  return galaxies;
};

const expansionBy = (by: number) => (map: Cell[][]): number => {
  const galaxies = findGalaxies(map, by);

  let distance = 0;
  for (let i = 0; i < galaxies.length - 1; ++i) {
    for (let j = i + 1; j < galaxies.length; ++j) {
      distance += manhattan(galaxies[i], galaxies[j]);
    }
  }

  return distance;
};

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:day-11-cosmic-expansion.case',
        result: 374,
      },
      user: {
        input: 'file:day-11-cosmic-expansion.user',
        result: 9647174,
      },
    },
    prepare,
    solve: expansionBy(2),
  },
  hard: {
    cases: {
      test: {
        input: 'file:day-11-cosmic-expansion.case',
        result: 82000210,
      },
      user: {
        input: 'file:day-11-cosmic-expansion.user',
        result: 377318892554,
      },
    },
    prepare,
    solve: expansionBy(1_000_000),
  },
});
