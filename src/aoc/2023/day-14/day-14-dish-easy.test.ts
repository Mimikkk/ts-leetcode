import { Dish } from './day-14-dish.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const { scoreLoad, tilt, parse } = Dish;
const dish = (input: string): number => scoreLoad(tilt(parse(input), 'north'));

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:day-14-dish.case',
        result: 136,
      },
      user: {
        input: 'file:day-14-dish.user',
        result: 108955,
      },
    },
    prepare: (x) => x,
    solve: (input) => dish(input),
  },
});
