import { Dish } from './day-14-dish.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const { scoreLoad, cycles, parse } = Dish;
const dish = (input: string): number => scoreLoad(cycles(parse(input), 1_000_000_000));

createDay({
  hard: {
    cases: {
      test: {
        input: 'file:day-14-dish.case',
        result: 64,
      },
      user: {
        input: 'file:day-14-dish.user',
        result: 106689,
      },
    },
    prepare: (x) => x,
    solve: (input) => dish(input),
  },
});
