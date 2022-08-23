export {};

const checkXMatrix = (grid: number[][]) => {
  const n = grid.length;

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i === j || i + j === n - 1) {
        if (grid[i][j] == 0) return false;
      } else if (grid[i][j] > 0) return false;
    }
  }
  return true;
};

describe("chekc x matrix", () => {
  it("case 1", () => {
    expect(
      checkXMatrix([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    ).toBeFalsy();
  });
  it("case 2", () => {
    expect(
      checkXMatrix([
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
      ]),
    ).toBeTruthy();
  });
  it("case 3", () => {
    expect(
      checkXMatrix([
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [1, 0, 0, 1],
      ]),
    ).toBeTruthy();
  });
  it("case 4", () => {
    expect(
      checkXMatrix([
        [1, 0, 1, 1],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [1, 0, 0, 1],
      ]),
    ).toBeFalsy();
  });
  it("case 5", () => {
    expect(
      checkXMatrix([
        [1, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [1, 0, 0, 1],
      ]),
    ).toBeFalsy();
  });
});