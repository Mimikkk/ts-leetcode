export {};

const surfaceArea = (grid: number[][]) => {
  const cell = (i: number, j: number) => grid[i]?.[j] || 0;

  return grid.reduce((result, arr, i) =>
    arr.reduce((res, curr, j) =>
      curr ?res +
        curr *
        4 +
        2 -
        2 * (Math.min(cell(i - 1, j), curr) + Math.min(cell(i, j - 1), curr)):res, result), 0);
};

describe("surface area", () => {
  it("case 1", () => {
    expect(surfaceArea([[2]])).toEqual(10);
  });

  it("case 2", () => {
    expect(surfaceArea([[1, 2], [3, 4]])).toEqual(34);
  });
});
