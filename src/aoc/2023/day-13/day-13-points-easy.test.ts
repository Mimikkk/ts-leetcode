import { Pattern } from './day-13-points.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const points = (input: string): number =>
  Pattern.parse(input)
    .map((pattern) => Pattern.score(pattern, 0))
    .reduce((sum, curr) => sum + curr, 0);

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:day-13-points.case',
        result: 405,
      },
      user: {
        input: 'file:day-13-points.user',
        result: 30487,
      },
    },
    prepare: (x) => x,
    solve: (input) => points(input),
  },
});
