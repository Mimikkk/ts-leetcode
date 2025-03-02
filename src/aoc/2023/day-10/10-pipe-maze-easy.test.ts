import { Maze, Tile } from './10-pipe-maze.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const maze = (input: string): number => {
  const map = Maze.parse(input);

  const start = Maze.findStart(map);
  map[start[0]][start[1]] = Tile.infer(start, map);

  let maxDepth = 0;
  Maze.searchBreadth(map, start, ({ depth }) => {
    if (maxDepth < depth) maxDepth = depth;
  });

  return maxDepth;
};

createDay({
  easy: {
    cases: {
      simple: {
        input: 'file:10-pipe-maze.easy-simple-case.txt',
        result: 4,
      },
      complex: {
        input: 'file:10-pipe-maze.easy-complex-case.txt',
        result: 8,
      },
      user: {
        input: 'file:10-pipe-maze.user.txt',
        result: 6897,
      },
    },
    prepare: (x) => x,
    solve: (input) => maze(input),
  },
});
