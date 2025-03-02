import { Springs } from './day-12-hot-springs.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const springs = (input: string) =>
  Springs.parse(input)
    .map(Springs.extend)
    .map(([a, b]) => Springs.countArrangements(a, b))
    .reduce((a, b) => a + b, 0);

createDay({
  hard: {
    cases: {
      test1: {
        input: 'file:day-12-hot-springs.case-1.txt',
        result: 16384,
      },
      test2: {
        input: 'file:day-12-hot-springs.case-2.txt',
        result: 525152,
      },
      user: {
        input: 'file:day-12-hot-springs.user.txt',
        result: 10153896718999,
      },
    },
    prepare: (x) => x,
    solve: (input) => springs(input),
  },
});
