import { createDay } from '../../utils/createDay.ts';
import { Str } from '../../utils/ns/str.ts';

const prepare = (input: string): [time: string[], distance: string[]] =>
  Str.trimlines(input).map((line) => line.split(/\s+/).slice(1)) as [string[], string[]];

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:6-wait.case',
        result: 288,
      },
      user: {
        input: 'file:6-wait.user',
        result: 861300,
      },
    },
    prepare,
    solve: ([time, distance]) => {
      const times = time.map((x) => +x);
      const distances = distance.map((x) => +x);

      let product = 1;
      for (let i = 0; i < times.length; ++i) {
        const time = times[i];
        const distance = distances[i];
        let count = 0;

        for (let i = 0; i < time; ++i) {
          if (i * (time - i) > distance) ++count;
        }

        product *= count;
      }

      return product;
    },
  },
  hard: {
    cases: {
      test: {
        input: 'file:6-wait.case',
        result: 71503,
      },
      user: {
        input: 'file:6-wait.user',
        result: 28101347,
      },
    },
    prepare,
    solve: (input) => {
      const [time, distance] = input.map((x) => +x.join(''));

      let count = 0;
      for (let i = 0; i < time; ++i) {
        if (i * (time - i) > distance) ++count;
      }

      return count;
    },
  },
});
