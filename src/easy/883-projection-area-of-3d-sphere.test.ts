export {};

const sum = (args: number[]) => args.reduce((a, b) => a + b) ?? NaN;
const max = (nums: number[]) => Math.max(...nums) ?? NaN;
const transpose = (a: number[][]) => a[0].map((_, i) => a.map(row => row[i]));

const projectionArea = (grid: number[][]): number =>
  sum([
    grid.flat().filter(Boolean).length,
    sum(grid.map(max)),
    sum(transpose(grid).map(max)),
  ]);

describe("projection area", () => {
  it("case 1", () => {
    expect(projectionArea([[2]])).toBe(5);
  });

  it("case 2", () => {
    expect(projectionArea([[1, 0], [0, 2]])).toBe(8);
  });
});
