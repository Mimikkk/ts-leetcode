export {};

const mat = <T>(m: number, n: number, fill: T): T[][] => Array.from(Array(m), () => Array(n).fill(fill));

const transpose = (matrix: number[][]): number[][] => {
  const [m, n] = [matrix.length, matrix[0].length];

  const result = mat(m, n, 0);
  for (let x = 0; x < m; ++x) for (let y = 0; y < n; ++y) result[y][x] = matrix[x][y];
  return result;
};

describe("transpose", () => {
  it("case 1", () => {
    expect(
      transpose([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]);
  });
});