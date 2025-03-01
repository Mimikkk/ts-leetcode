import { exercise } from "@shared/utilities/exercise.ts";

const countBattleships = (board: ("X" | ".")[][]): number => {
  const n = board.length;
  const m = board[0].length;

  let count = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (board[i][j] === "X" && (i + 1 === n || board[i + 1][j] !== "X") && board[i][j + 1] !== "X") ++count;
    }
  }

  return count;
};

exercise(countBattleships, [
  [
    [
      [
        ["X", ".", ".", "X"],
        [".", ".", ".", "X"],
        [".", ".", ".", "X"],
      ],
    ],
    2,
  ],
  [[[["."]]], 0],
]);
