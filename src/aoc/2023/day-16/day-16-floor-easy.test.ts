import { createDay } from '../../utils/createDay.ts';
import { Floor } from './day-16-floor.utils.ts';

const floor = (input: string): number => Floor.explore(Floor.parse(input), [[0, 0], 'right']);

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:day-16-floor.case',
        result: 46,
      },
      user: {
        input: 'file:day-16-floor.user',
        result: 7798,
      },
    },
    prepare: (x) => x,
    solve: (input) => floor(input),
  },
});
