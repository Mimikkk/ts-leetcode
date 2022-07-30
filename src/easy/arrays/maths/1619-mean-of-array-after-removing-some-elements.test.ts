export {};

module A {
  export const add = (a: number, b: number) => a + b;
  export const sum = (arr: number[]) => arr.reduce(add, 0);
  export const len = (arr: number[]): number => arr.length;
  export const mean = (arr: number[]) => sum(arr) / len(arr);

  export const sorted = (
    arr: number[],
    fn: (a: number, b: number) => number = S.asc,
  ) => [...arr].sort(fn);

  export module S {
    export const asc = (a: number, b: number) => a - b;
    export const desc = (a: number, b: number) => b - a;
  }
}

const trim = (arr: number[], percent: number) => {
  const len = arr.length;
  const remove = Math.ceil(len * percent);

  return A.sorted(arr).slice(remove, len - remove);
};

const trimMean = (arr: number[]) => A.mean(trim(arr, 0.05));

describe("trailing mean of an array", () => {
  it("case 1", () => {
    expect(
      trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]),
    ).toBe(2);
  });

  it("case 2", () => {
    expect(
      trimMean([6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0]),
    ).toBe(4);
  });

  it("case 3", () => {
    expect(
      trimMean([
        6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5,
        4, 3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4,
      ]),
    ).toBeCloseTo(4.7778, 3);
  });
});
