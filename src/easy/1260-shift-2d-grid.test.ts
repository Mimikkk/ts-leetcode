export {};

const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const reverse = (mat: number[][], i: number, j: number) => {
  const n = mat[0].length;

  for (j = j - 1; i < j; ++i, --j) {
    const [y1, x1] = divmod(i, n);
    const [y2, x2] = divmod(j, n);
    [mat[y1][x1], mat[y2][x2]] = [mat[y2][x2], mat[y1][x1]];
  }
};

const shiftGrid = (grid: number[][], k: number): number[][] => {
  const [m, n] = [grid.length, grid[0].length];
  const mn = m * n;
  k %= mn;

  reverse(grid, 0, mn);
  reverse(grid, 0, k);
  reverse(grid, k, mn);
  return grid;
};

describe("shift k times", () => {
  it("case 1", () => {
    expect(shiftGrid([[1, 2]], 0)).toEqual([[1, 2]]);
  });

  it("case 2", () => {
    expect(shiftGrid([[1, 2]], 1)).toEqual([[2, 1]]);
  });

  it("case 3", () => {
    expect(shiftGrid([[1, 2]], 2)).toEqual([[1, 2]]);
  });

  it("case 4", () => {
    expect(shiftGrid([[1]], 10000)).toEqual([[1]]);
  });

  it("case 5", () => {
    expect(
      shiftGrid(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        1,
      ),
    ).toEqual([
      [9, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]);
  });
});