import { exercise } from "@shared/utilities/exercise.js";
import { TreeNode } from "@shared/structures/index.js";

type Position = [number, number];

const enum Command {
  Left = "L",
  Right = "R",
  Up = "U",
  Down = "D",
}

const executeInstructions = (n: number, start: Position, s: string): number[] =>
  [...s].map((_, i, commands) => {
    let [sx, sy] = start;
    let count = 0;

    for (let j = i; j < commands.length; ++j) {
      switch (commands[j]) {
        case Command.Left:
          --sy;
          break;
        case Command.Right:
          ++sy;
          break;
        case Command.Up:
          --sx;
          break;
        case Command.Down:
          ++sx;
          break;
      }

      if (sx < 0 || sx >= n || sy < 0 || sy >= n) break;
      ++count;
    }

    return count;
  });

exercise(executeInstructions, [
  [
    [3, [0, 1], "RRDDLU"],
    [1, 5, 4, 3, 1, 0],
  ],
  [
    [2, [1, 1], "LURD"],
    [4, 1, 0, 0],
  ],
  [
    [1, [0, 0], "LRUD"],
    [0, 0, 0, 0],
  ],
]);
