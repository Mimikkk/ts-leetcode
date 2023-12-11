import { exercise } from "@shared/utilities/exercise.js";
import ComplexTestCase from "./10-pipe-maze.easy-complex-case.txt?raw";
import SimpleTestCase from "./10-pipe-maze.easy-simple-case.txt?raw";
import UserCase from "./10-pipe-maze.user.txt?raw";
import { Maze, Tile } from "./10-pipe-maze.utils.js";

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

exercise(maze, [
  [[SimpleTestCase], 4],
  [[ComplexTestCase], 8],
  [[UserCase], 6897],
]);
