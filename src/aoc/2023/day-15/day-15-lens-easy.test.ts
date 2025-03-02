import { Lens } from './day-15-lens.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const lens = (input: string): number =>
  Lens.parse(input)
    .map(Lens.hash)
    .reduce((a, b) => a + b, 0);

createDay({
  easy: {
    cases: {
      test1: {
        input: 'HASH',
        result: 52,
      },
      test2: {
        input: 'file:day-15-lens.case.txt',
        result: 1320,
      },
      user: {
        input: 'file:day-15-lens.user.txt',
        result: 514025,
      },
    },
    prepare: (x) => x,
    solve: (input) => lens(input),
  },
});
