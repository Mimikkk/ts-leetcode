export {};

type Rectangle = [number, number, number, number];
const isRectangleOverlap = ([x1, y1, x2, y2]: Rectangle, [x3, y3, x4, y4]: Rectangle) =>
  x1 < x4 && x2 > x3 && y1 < y4 && y2 > y3;

describe("rectangle overlap", () => {
  it("case 1", () => {
    expect(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3])).toBe(true);
  });

  it("case 2", () => {
    expect(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1])).toBe(false);
  });
});