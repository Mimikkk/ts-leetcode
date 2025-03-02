import { Lagoon } from './day-18-lagoon.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const lagoon = (input: string): number => {
  const path = Lagoon.asPath(Lagoon.parseHex(input));

  return Lagoon.calcArea(path) + Lagoon.calcPerimeter(path) + 1;
};

createDay({
  hard: {
    cases: {
      test: {
        input: 'file:day-18-lagoon.case.txt',
        result: 952408144115,
      },
      user: {
        input: 'file:day-18-lagoon.user.txt',
        result: 133125706867777,
      },
    },
    prepare: (x) => x,
    solve: (input) => lagoon(input),
  },
});
