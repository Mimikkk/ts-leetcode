import { Springs } from './day-12-hot-springs.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const springs = (input: string) =>
  Springs.parse(input)
    .map(([a, b]) => Springs.countArrangements(a, b))
    .reduce((a, b) => a + b, 0);

createDay({
  easy: {
    cases: {
      test1: {
        input: 'file:day-12-hot-springs.case-1',
        result: 4,
      },
      test2: {
        input: 'file:day-12-hot-springs.case-2',
        result: 21,
      },
      user: {
        input: 'file:day-12-hot-springs.user',
        result: 7843,
      },
    },
    prepare: (x) => x,
    solve: (input) => springs(input),
  },
});
