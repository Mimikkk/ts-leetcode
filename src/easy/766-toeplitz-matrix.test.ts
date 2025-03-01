import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const isToeplitzMatrix = (matrix: number[][]): boolean => {
  const isToeplitzDiagonal = (i: number, j: number) => {
    const diagonal = matrix[i][j];
    while (matrix[++i]?.[++j] === diagonal) {}
    return matrix[i]?.[j] === undefined;
  };

  const [m, n] = [matrix.length, matrix[0].length];
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (matrix[x - 1]?.[y - 1] === undefined && !isToeplitzDiagonal(x, y)) return false;
    }
  }

  return true;
};

describe("is toeplitz matrix", () => {
  it("case 1", () => {
    expect(
      isToeplitzMatrix([
        [1, 2, 3, 4],
        [5, 1, 2, 3],
        [9, 5, 1, 2],
      ]),
    ).toEqual(true);
  });

  it("case 2", () => {
    expect(
      isToeplitzMatrix([
        [1, 2],
        [2, 2],
      ]),
    ).toEqual(false);
  });
});