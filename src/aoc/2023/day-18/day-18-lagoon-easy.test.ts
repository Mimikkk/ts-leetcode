import { createDay } from '../../utils/createDay.ts';
import { Lagoon } from './day-18-lagoon.utils.ts';

const lagoon = (input: string): number => {
  const path = Lagoon.asPath(Lagoon.parseDec(input));

  return Lagoon.calcArea(path) + Lagoon.calcPerimeter(path) + 1;
};

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:day-18-lagoon.case.txt',
        result: 62,
      },
      user: {
        input: 'file:day-18-lagoon.user.txt',
        result: 108909,
      },
    },
    prepare: (x) => x,
    solve: (input) => lagoon(input),
  },
});
