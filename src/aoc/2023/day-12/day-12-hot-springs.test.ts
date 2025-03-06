import { Springs } from './day-12-hot-springs.utils.ts';
import { createDay } from '../../utils/createDay.ts';
import { Maths } from '../../utils/ns/maths.ts';

const solve = (input: Springs.Schema[]) => Maths.sum(input.map(([a, b]) => Springs.countArrangements(a, b)));

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
    prepare: Springs.parse,
    solve,
  },
  hard: {
    cases: {
      test1: {
        input: 'file:day-12-hot-springs.case-1',
        result: 16384,
      },
      test2: {
        input: 'file:day-12-hot-springs.case-2',
        result: 525152,
      },
      user: {
        input: 'file:day-12-hot-springs.user',
        result: 10153896718999,
      },
    },
    prepare: (input) => Springs.parse(input).map(Springs.extend),
    solve,
  },
});
