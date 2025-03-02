import { createDay } from '../../utils/createDay.ts';

const add = (a: number, b: number): number => a + b;
const oSub = (a: number, b: number): number => b - a;
const oDif = (nums: number[]): number => nums.reduce(oSub);

const mirage = (input: string): number =>
  input
    .split(/\r?\n/)
    .filter((line) => line)
    .map((history) => history.split(' ').map((chapter) => +chapter))
    .map((history) => {
      const row = Array(history.length);

      for (let j = 0, it = history.length; j < it; j++) {
        row[history.length - j - 1] = history[0];

        for (let k = 1; k < it - j; k++) history[k - 1] = history[k] - history[k - 1];

        if (it - j - 1 === 0) break;
      }

      return row;
    })
    .map(oDif)
    .reduce(add);

createDay({
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
    prepare: (x) => x,
    solve: (input) => mirage(input),
  },
});
