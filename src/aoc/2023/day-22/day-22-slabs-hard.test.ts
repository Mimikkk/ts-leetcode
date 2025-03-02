import { createDay } from '../../utils/createDay.ts';
import { Slabs } from './day-22-slabs.utils.ts';

const slabs = (input: string): number => {
  const bricks = Slabs.parse(input);
  const byId = Slabs.group(bricks);
  const byVec = Slabs.fall(bricks);

  const count = bricks.map((brick) => Slabs.countSupported(brick, byId, byVec)).reduce((a, b) => a + b, 0);
  Slabs.Brick.topIds.clear();
  Slabs.Brick.underIds.clear();
  return count;
};

createDay({
  hard: {
    cases: {
      user: {
        input: 'file:day-22-slabs.user',
        result: 63491,
      },
    },
    prepare: (x) => x,
    solve: (input) => slabs(input),
  },
});
