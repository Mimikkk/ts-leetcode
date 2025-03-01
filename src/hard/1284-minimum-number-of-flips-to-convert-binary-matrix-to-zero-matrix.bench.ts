import { Sol1_1284, Sol2_1284 } from "./1284-minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix.ts";
import { describe } from "jsr:@std/testing/bdd";

describe("Sol1_1284", () => {
  const mat: number[][] = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
  ];

  Deno.bench("solution - 1", () => {
    Sol1_1284.minFlips(mat);
  });

  Deno.bench("solution - 2", () => {
    Sol2_1284.minFlips(mat);
  });
});
