import { createMatrix } from "../adventofcode2023/utils/utils.js";
export {};

type position = [number, number];

const isOdd = (n: number) => !!(n & 1);
const filterBy =
  <T>(pred: (n: T) => boolean) =>
  (nums: T[]) =>
    nums.filter(pred);

const countOddCells = (matrix: number[][]): number => matrix.flatMap(filterBy(isOdd)).length;

const oddCells = (m: number, n: number, indices: position[]) => {
  const matrix = createMatrix(m, n, 0);

  indices.forEach(([x, y]) => {
    matrix.forEach((_, row) => ++matrix[row][y]);
    matrix[x].forEach((_, col) => ++matrix[x][col]);
  });

  return countOddCells(matrix);
};

describe("odd cells", () => {
  it("case 1", () => {
    expect(
      oddCells(2, 3, [
        [0, 1],
        [1, 1],
      ]),
    ).toBe(6);
  });

  it("case 2", () => {
    expect(
      oddCells(2, 2, [
        [1, 1],
        [0, 0],
      ]),
    ).toBe(0);
  });
});
