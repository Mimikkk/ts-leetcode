import { createDay } from '../../utils/createDay.ts';
import { Maths } from '../../utils/ns/maths.ts';
import { Str } from '../../utils/ns/str.ts';

const prepare = (input: string): number[][] =>
  Str.trimlines(input)
    .map((history) => history.split(' ').map((chapter) => +chapter));

const easy = (input: number[][]): number =>
  Maths.sum(
    input
      .flatMap((row) => {
        for (let j = 0, it = row.length; j < it; j++) {
          for (let k = 1; k < it - j; k++) {
            row[k - 1] = row[k] - row[k - 1];
          }

          if (it - j - 1 === 0) break;
        }

        return row;
      }),
  );

const sub = (a: number, b: number): number => b - a;
const diff = (nums: number[]): number => nums.reduce(sub);

const hard = (input: number[][]): number =>
  Maths.sum(
    input
      .map((history) => {
        const row = Array(history.length);

        for (let j = 0, it = history.length; j < it; j++) {
          row[history.length - j - 1] = history[0];

          for (let k = 1; k < it - j; k++) {
            history[k - 1] = history[k] - history[k - 1];
          }

          if (it - j - 1 === 0) break;
        }

        return row;
      })
      .map(diff),
  );

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:9-mirage-maintenance.case',
        result: 114,
      },
      user: {
        input: 'file:9-mirage-maintenance.user',
        result: 1972648895,
      },
    },
    prepare: prepare,
    solve: easy,
  },
  hard: {
    cases: {
      test: {
        input: 'file:9-mirage-maintenance.case',
        result: 2,
      },
      user: {
        input: 'file:9-mirage-maintenance.user',
        result: 919,
      },
    },
    prepare: prepare,
    solve: hard,
  },
});
