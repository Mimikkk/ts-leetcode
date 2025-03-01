import { exercise } from "@shared/utilities/exercise.ts";

namespace Queen {
  export const countValidPositions = (board: boolean[][], x: number = 0): number => {
    if (x === board.length) return 1;

    let count = 0;
    for (let y = 0; y < board.length; ++y) {
      if (!Queen.isValid(board, x, y)) continue;
      board[x][y] = true;
      count += countValidPositions(board, x + 1);
      board[x][y] = false;
    }

    return count;
  };

  export function isValid(board: boolean[][], x: number, y: number): boolean {
    for (let i = 0; i < x; ++i) if (board[i][y]) return false;

    const maxLeft = Math.min(x, y);
    for (let i = 1; i <= maxLeft; ++i) if (board[x - i][y - i]) return false;

    const maxRight = Math.min(x, board.length - y - 1);
    for (let i = 1; i <= maxRight; ++i) if (board[x - i][y + i]) return false;
    return true;
  }
}

const createMatrix = <T>(n: number, m: number, fill: T | (() => T)): T[][] => {
  const fillFn = fill instanceof Function ? fill : () => fill;

  return Array.from({ length: n }, () => Array.from({ length: m }, fillFn));
};

const totalNQueens = (n: number): number => Queen.countValidPositions(createMatrix(n, n, false));

exercise(totalNQueens, [
  [[4], 2],
  [[1], 1],
]);
