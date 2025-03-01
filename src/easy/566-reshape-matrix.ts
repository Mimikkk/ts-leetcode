import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const matrixReshape = (mat: number[][], r: number, c: number): number[][] => {
  if (mat.length * mat[0].length !== r * c) return mat;

  let flat = mat.flat();
  const res: number[][] = Array(r)
    .fill(0)
    .map(() => Array(c).fill(0));
  for (let i = 0; i < r; i++) {
    res[i] = [];
    for (let j = 0; j < c; j++) {
      res[i][j] = flat[i * c + j];
    }
  }
  return res;
};
