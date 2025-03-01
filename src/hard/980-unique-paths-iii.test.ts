import { exercise } from "@shared/utilities/exercise.ts";

const enum Cell {
  Empty = 0,
  Start = 1,
  Block = -1,
  Final = 2,
}

const findStart = (grid: Cell[][]): [number, number] => {
  for (let i = 0, n = grid.length, m = grid[0].length; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (grid[i][j] === Cell.Start) return [i, j];
    }
  }

  throw Error("No start found");
};

const findFinal = (grid: Cell[][]): [number, number] => {
  for (let i = 0, n = grid.length, m = grid[0].length; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (grid[i][j] === Cell.Final) return [i, j];
    }
  }

  throw Error("No end found");
};

const uniquePathsIII = (grid: Cell[][]): number => {
  const [startX, startY] = findStart(grid);
  const [finalX, finalY] = findFinal(grid);
  const n = grid.length;
  const m = grid[0].length;

  const expectedLength = grid.map((row) => row.filter((x) => x == Cell.Empty).length).reduce((a, b) => a + b, 0) + 2;

  const hashes = grid.map((row, i) => row.map((_, j) => `${i},${j}`));
  const stack: [x: number, y: number, path: string[]][] = [[startX, startY, []]];

  let count = 0;
  while (stack.length > 0) {
    const [x, y, path] = stack.pop()!;

    if (path.includes(hashes[x][y]) || grid[x][y] === Cell.Block) continue;

    path.push(hashes[x][y]);
    if (x === finalX && y === finalY && path.length === expectedLength) ++count;

    if (x > 0) stack.push([x - 1, y, [...path]]);
    if (x < n - 1) stack.push([x + 1, y, [...path]]);
    if (y > 0) stack.push([x, y - 1, [...path]]);
    if (y < m - 1) stack.push([x, y + 1, [...path]]);
    path.pop();
  }

  return count;
};

exercise(uniquePathsIII, [
  [
    [
      [
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 2, -1],
      ],
    ],
    2,
  ],
  [
    [
      [
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 2],
      ],
    ],
    4,
  ],
]);
