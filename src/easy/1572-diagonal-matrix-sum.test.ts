export {};

const diagonalSum = (mat: number[][]): number => {
  const [m, n] = [mat.length, mat[0].length];
  let sum = 0;

  for (let x = 0; x < m; ++x) {
    for (let y = 0; y < n; ++y) {
      if (x !== y) continue;
      sum += mat[x][y];

      if (x === n - y - 1) continue;
      sum += mat[x][n - y - 1];
    }
  }

  return sum;
};

describe("diagonal matrix sum", () => {
  it("should return correct result", () => {
    expect(
      diagonalSum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual(25);
    expect(
      diagonalSum([
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ]),
    ).toEqual(8);
    expect(diagonalSum([[5]])).toEqual(5);
  });
});
