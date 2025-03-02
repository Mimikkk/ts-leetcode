import { Dish } from './day-14-dish.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const { scoreLoad, tilt, parse } = Dish;
const dish = (input: string): number => scoreLoad(tilt(parse(input), 'north'));

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:day-14-dish.case.txt',
        result: 136,
      },
      user: {
        input: 'file:day-14-dish.user.txt',
        result: 108955,
      },
    },
    prepare: (x) => x,
    solve: (input) => dish(input),
  },
});
