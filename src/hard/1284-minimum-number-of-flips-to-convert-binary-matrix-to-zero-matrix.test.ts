import { exercise } from "@shared/utilities/exercise.ts";
import { Sol2_1284 } from "./1284-minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix.ts";

exercise(Sol2_1284.minFlips, [
  [
    [
      [
        [0, 0],
        [0, 1],
      ],
    ],
    3,
  ],
  [[[[0]]], 0],
  [
    [
      [
        [1, 0, 0],
        [1, 0, 0],
      ],
    ],
    -1,
  ],
  [
    [
      [
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
      ],
    ],
    4,
  ],
]);
