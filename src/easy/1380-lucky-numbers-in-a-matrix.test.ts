export {};

const transpose = (a: number[][]) => a[0].map((_, i) => a.map(row => row[i]));
const max = (nums: number[]) => Math.max(...nums);
const min = (nums: number[]) => Math.min(...nums);
const includedIn = (nums: number[]) => (e: number) => nums.includes(e);

const luckyNumbers = (matrix: number[][]) =>
  matrix.map(min).filter(includedIn(transpose(matrix).map(max)));

describe("lucky", () => {
  it("case 1", () => {
    expect(luckyNumbers([
      [3, 7, 8],
      [9, 11, 13],
      [15, 16, 17],
    ])).toEqual([15]);
  });

  it("case 2", () => {
    expect(luckyNumbers([
      [1, 10, 4, 2],
      [9, 3, 8, 7],
      [15, 16, 17, 12],
    ])).toEqual([12]);
  });
});