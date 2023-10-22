export {};

const maxCount = (m: number, n: number, ops: [number, number][]): number => {
  for (const [x, y] of ops) {
    m = Math.min(m, x);
    n = Math.min(n, y);
  }

  return m * n;
};

describe("range addition ii", () => {
  it("case 1", () => {
    expect(
      maxCount(3, 3, [
        [1, 2],
        [2, 3],
        [3, 4],
      ]),
    ).toBe(2);
  });

  it("case 2", () => {
    expect(
      maxCount(3, 3, [
        [1, 2],
        [2, 3],
      ]),
    ).toBe(2);
  });
});
