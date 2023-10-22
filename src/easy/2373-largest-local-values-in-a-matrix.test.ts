const largestLocal = (grid: number[][], count: number = 2): number[][] => {
  const n = grid.length;
  const m = n - 2;
  const result = new Array(m).fill(0).map(() => new Array(m).fill(0));

  for (let x = 1; x < n - 1; ++x) {
    for (let y = 1; y < n - 1; ++y) {
      result[x - 1][y - 1] = Math.max(
        grid[x - 1][y - 1],
        grid[x - 1][y],
        grid[x - 1][y + 1],
        grid[x][y - 1],
        grid[x][y],
        grid[x][y + 1],
        grid[x + 1][y - 1],
        grid[x + 1][y],
        grid[x + 1][y + 1],
      );
    }
  }

  return result;
};

describe("largestLocal", () => {
  it("case 1", () => {
    expect(
      largestLocal([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([[9]]);
  });
  it("case 2", () => {
    expect(
      largestLocal([
        [9, 9, 8, 1],
        [5, 6, 2, 6],
        [8, 2, 6, 4],
        [6, 2, 2, 2],
      ]),
    ).toEqual([
      [9, 9],
      [8, 6],
    ]);
  });
  it("case 3", () => {
    expect(
      largestLocal([
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 2, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
      ]),
    ).toEqual([
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2],
    ]);
  });
});
