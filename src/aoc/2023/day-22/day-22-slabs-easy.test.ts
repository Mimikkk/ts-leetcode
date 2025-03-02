import { count } from '../../utils/utils.ts';
import { Slabs } from './day-22-slabs.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const slabs = (input: string): number => {
  const bricks = Slabs.parse(input);
  const byId = Slabs.group(bricks);
  const byVec = Slabs.fall(bricks);

  const result = count(bricks, (brick) => Slabs.canDisintegrate(brick, byId, byVec));
  Slabs.Brick.topIds.clear();
  Slabs.Brick.underIds.clear();
  return result;
};

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:day-22-slabs.case',
        result: 5,
      },
      user: {
        input: 'file:day-22-slabs.user',
        result: 401,
      },
    },
    prepare: (x) => x,
    solve: (input) => slabs(input),
  },
});
