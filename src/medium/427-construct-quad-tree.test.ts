import { exercise } from "@shared/utilities/exercise.js";
import { QuadTree } from "@shared/structures/QuadTree.js";

type Node = QuadTree;
const Node = QuadTree;
const construct = (grid: number[][]): Node | null => {
  const n = grid.length;
  if (n === 0) return null;

  const isSame = (x: number, y: number, size: number): boolean => {
    const value = grid[x][y];
    for (let i = x; i < x + size; ++i) {
      for (let j = y; j < y + size; ++j) {
        if (grid[i][j] !== value) return false;
      }
    }
    return true;
  };

  function recurse(x: number, y: number, size: number): Node | null {
    if (isSame(x, y, size)) return new Node(grid[x][y] === 1, true);

    const half = ~~(size / 2);
    return new Node(
      false,
      false,
      recurse(x, y, half),
      recurse(x, y + half, half),
      recurse(x + half, y, half),
      recurse(x + half, y + half, half),
    );
  }

  return recurse(0, 0, n);
};

exercise(construct, [
  [
    [
      [
        [0, 1],
        [1, 0],
      ],
    ],
    QuadTree.node([
      [0, 1],
      [1, 0],
    ]),
  ],
]);
