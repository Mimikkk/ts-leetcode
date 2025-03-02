import { createDay } from '../../utils/createDay.ts';
import { Str } from '../../utils/ns/str.ts';

const isGear = (char: string) => char === '*';

const isPart = (schema: string[], minx: number, maxx: number, miny: number, maxy: number) => {
  for (let x = minx; x < maxx; ++x) {
    for (let y = miny; y < maxy; ++y) {
      if (!Str.isDigit(schema[x][y]) && schema[x][y] !== '.') return true;
    }
  }
  return false;
};

const findStart = (schema: string[], i: number, j: number) => {
  while (Str.isDigit(schema[i][j])) --j;
  return ++j;
};
const findEnd = (schema: string[], i: number, j: number) => {
  while (Str.isDigit(schema[i][j])) ++j;
  return --j;
};

type Input = { schema: string[]; n: number; m: number };

const parseInput = (input: string): Input => {
  const schema = Str.trimlines(input);
  const n = schema.length;
  const m = schema[0].length;

  return { schema, n, m };
};

const easy = ({ schema, n, m }: Input): number => {
  let sum = 0;
  for (let i = 0; i < n; ++i) {
    const minx = Math.max(i - 1, 0);
    const maxx = Math.min(i + 2, n);

    for (let j = 0; j < m; ++j) {
      if (!Str.isDigit(schema[i][j])) continue;

      const start = j;
      while (Str.isDigit(schema[i][j])) ++j;
      const miny = Math.max(start - 1, 0);
      const maxy = Math.min(j + 1, m);

      if (isPart(schema, minx, maxx, miny, maxy)) sum += +schema[i].substring(start, j);
    }
  }

  return sum;
};

const hard = ({ schema, n, m }: Input): number => {
  let sum = 0;
  for (let i = 0; i < n; ++i) {
    const minx = Math.max(i - 1, 0);
    const maxx = Math.min(i + 2, n);

    numbers: for (let j = 0; j < m; ++j) {
      if (!isGear(schema[i][j])) continue;
      const miny = Math.max(j - 1, 0);
      const maxy = Math.min(j + 2, m);

      let nvalue: number | undefined;
      let nindex: number | undefined;
      let nstart: number | undefined;
      let nend: number | undefined;
      for (let x = minx; x < maxx; ++x) {
        for (let y = miny; y < maxy; ++y) {
          if ((x === i && y === j) || !Str.isDigit(schema[x][y])) continue;
          if (nindex === x && nstart! <= y && nend! >= y) continue;

          const start = findStart(schema, x, y);
          const end = findEnd(schema, x, y);
          const value = +schema[x].substring(start, end + 1);

          if (nvalue === undefined) {
            nvalue = value;
            nindex = x;
            nstart = start;
            nend = end;
            continue;
          }

          sum += nvalue * value;
          continue numbers;
        }
      }
    }
  }

  return sum;
};

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:3-gear-ratios.case',
        result: 4361,
      },
      user: {
        input: 'file:3-gear-ratios.user',
        result: 498559,
      },
    },
    prepare: parseInput,
    solve: easy,
  },
  hard: {
    cases: {
      test: {
        input: 'file:3-gear-ratios.case',
        result: 467835,
      },
      user: {
        input: 'file:3-gear-ratios.user',
        result: 72246648,
      },
    },
    prepare: parseInput,
    solve: hard,
  },
});
