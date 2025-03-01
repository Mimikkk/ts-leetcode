import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const construct2DArray = (original: number[], m: number, n: number): number[][] => {
  if (original.length !== m * n) return [];

  const res: number[][] = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    res[i] = [];
    for (let j = 0; j < n; j++) {
      res[i][j] = original[i * n + j];
    }
  }
  return res;
};
