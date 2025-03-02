import { Floor } from './day-16-floor.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const floor = (input: string): number => {
  const map = Floor.parse(input);

  const starts: [Floor.Position, Floor.Direction][] = [];
  for (let i = 0; i < map.n; ++i) starts.push([[i, 0], 'right']);
  for (let i = 0; i < map.m; ++i) starts.push([[0, i], 'down']);
  for (let i = 0; i < map.n; ++i) starts.push([[i, map.m - 1], 'left']);
  for (let i = 0; i < map.m; ++i) starts.push([[map.n - 1, i], 'up']);

  return Math.max(...starts.map((start) => Floor.explore(map, start)));
};

createDay({
  hard: {
    cases: {
      test: {
        input: 'file:day-16-floor.case',
        result: 51,
      },
      user: {
        input: 'file:day-16-floor.user',
        result: 8026,
      },
    },
    prepare: (x) => x,
    solve: (input) => floor(input),
  },
});
