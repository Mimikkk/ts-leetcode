import { A } from "@shared/modules/arrays.js";

export {};

const isCovered = (ranges: [number, number][], left: number, right: number) =>
  A.N.range(left, right + 1).some((n) => ranges.some(([l, r]) => l <= n && n <= r));

describe("is coverede", () => {
  it("case 1", () => {
    expect(
      isCovered(
        [
          [1, 2],
          [3, 4],
          [5, 6],
        ],
        2,
        5,
      ),
    ).toBe(true);
  });
  it("case 2", () => {
    expect(
      isCovered(
        [
          [1, 10],
          [10, 20],
        ],
        21,
        21,
      ),
    ).toBe(false);
  });
});
