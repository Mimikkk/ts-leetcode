import { exercise } from "@shared/utilities/exercise.js";
import SimpleTestCase from "./10-pipe-maze.easy-simple-case.txt?raw";
import Complex1TestCase from "./10-pipe-maze.hard-1-case.txt?raw";
import Complex2TestCase from "./10-pipe-maze.hard-2-case.txt?raw";
import Complex3TestCase from "./10-pipe-maze.hard-3-case.txt?raw";
import Complex4TestCase from "./10-pipe-maze.hard-4-case.txt?raw";
import UserCase from "./10-pipe-maze.user.txt?raw";
import { createMatrix, Direction, Maze, Position, Tile } from "./10-pipe-maze.utils.js";

const maze = (input: string): number => {
  const map = Maze.parse(input);

  const start = Maze.findStart(map);
  map[start[0]][start[1]] = Tile.infer(start, map);

  const path: Position[] = [];
  Maze.searchDepth(map, start, ({ position }) => path.push(position));

  const visited = new Set(path.map(([x, y]) => `${x},${y}`));

  for (let i = 0; i < map.n; ++i) {
    for (let j = 0; j < map.m; ++j) {
      if (visited.has(`${i},${j}`)) continue;
      map[i][j] = Tile.Ground;
    }
  }

  const directionOf = ([x1, y1]: Position, [x2, y2]: Position): Direction =>
    x1 === x2 ? (y1 < y2 ? Direction.right : Direction.left) : x1 < x2 ? Direction.down : Direction.up;

  const dirs: Direction[] = [];
  for (let i = 1; i < path.length; ++i) dirs.push(directionOf(path[i - 1], path[i]));
  dirs.push(directionOf(path[path.length - 1], path[0]));

  const findCircuitDirection = (): "right" | "left" => {
    for (let i = 1; i < dirs.length; ++i) {
      const previous = dirs[i - 1];
      const next = dirs[i];

      if (previous === next) continue;
      if (previous === Direction.right && next === Direction.down) return "right";
      if (previous === Direction.down && next === Direction.left) return "right";
      if (previous === Direction.left && next === Direction.up) return "right";
      if (previous === Direction.up && next === Direction.right) return "right";

      if (previous === Direction.right && next === Direction.up) return "left";
      if (previous === Direction.up && next === Direction.left) return "left";
      if (previous === Direction.left && next === Direction.down) return "left";
      if (previous === Direction.down && next === Direction.right) return "left";
      return "right";
    }
    throw Error("Invalid circuit");
  };
  let direction = findCircuitDirection();

  const directionMap = new Map(
    direction === "left"
      ? [
          [Direction.up, Direction.left],
          [Direction.left, Direction.down],
          [Direction.down, Direction.right],
          [Direction.right, Direction.up],
        ]
      : [
          [Direction.up, Direction.right],
          [Direction.right, Direction.down],
          [Direction.down, Direction.left],
          [Direction.left, Direction.up],
        ],
  );

  const neighbours: Position[] = [Direction.up, Direction.right, Direction.down, Direction.left];

  const visits = createMatrix(map.n, map.m, false);
  let sum = 0;
  for (let i = 0; i < path.length; ++i) {
    const [x, y] = path[i];

    let [dx, dy] = directionMap.get(dirs[i])!;
    const xi = x + dx;
    const yj = y + dy;

    if (map[xi][yj] !== Tile.Ground) continue;
    if (visits[xi][yj]) continue;
    const stack: Position[] = [[xi, yj]];
    visits[xi][yj] = true;

    while (stack.length) {
      const [x, y] = stack.pop()!;
      sum += 1;

      for (const [dx, dy] of neighbours) {
        const xi = x + dx;
        const yj = y + dy;
        if (xi < 0 || xi >= map.n || yj < 0 || yj >= map.m) continue;
        if (visits[xi][yj]) continue;
        visits[xi][yj] = true;

        if (map[xi][yj] !== Tile.Ground) continue;
        stack.push([xi, yj]);
      }
    }
  }

  return sum;
};

exercise(maze, [
  [[SimpleTestCase], 1],
  [[Complex1TestCase], 18],
  [[Complex2TestCase], 8],
  [[Complex3TestCase], 10],
  [[Complex4TestCase], 4],
  [[UserCase], 367],
]);
