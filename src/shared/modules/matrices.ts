import { A } from "./arrays.js";

export module M {
  export const create = <T>(m: number, n: number, fn: (i: number, j: number) => T): T[][] =>
    A.create(n, (i) => A.create(n, (j) => fn(i, j)));
  export const rotateBy90Degrees = (mat: number[][]) => {
    const result = new Array(mat.length).fill(0).map(() => new Array(mat.length).fill(0));

    for (let i = 0; i < mat.length; ++i) {
      for (let j = 0; j < mat.length; ++j) {
        result[i][j] = mat[mat.length - j - 1][i];
      }
    }
    return result;
  };
  export const equal = (mat: number[][], target: number[][]) => {
    if (mat.length !== target.length) return false;
    for (let i = 0; i < mat.length; ++i) {
      if (mat[i].length !== target[i].length) return false;

      for (let j = 0; j < mat[i].length; ++j) {
        if (mat[i][j] !== target[i][j]) return false;
      }
    }
    return true;
  };
}
