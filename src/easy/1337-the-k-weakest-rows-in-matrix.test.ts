export {};

const add = (a: number, b: number) => a + b;
const sum = (nums: number[]) => nums.reduce(add, 0);
type Entry = [string, number];
const byValue = ([, a]: Entry, [, b]: Entry) => a - b;
const key = ([key]: Entry) => +key;

const kWeakestRows = (mat: number[][], k: number) => Object.entries(mat.map(sum)).sort(byValue).map(key).splice(0, k);

describe("the k weakest rows in matrix", () => {
  it("case 1", () => {
    expect(
      kWeakestRows(
        [
          [1, 1, 0, 0, 0],
          [1, 1, 1, 1, 0],
          [1, 0, 0, 0, 0],
          [1, 1, 0, 0, 0],
          [1, 1, 1, 1, 1],
        ],
        3,
      ),
    ).toEqual([2, 0, 3]);
  });

  it("case 2", () => {
    expect(
      kWeakestRows(
        [
          [1, 0, 0, 0],
          [1, 1, 1, 1],
          [1, 0, 0, 0],
          [1, 0, 0, 0],
        ],
        2,
      ),
    ).toEqual([0, 2]);
  });
});