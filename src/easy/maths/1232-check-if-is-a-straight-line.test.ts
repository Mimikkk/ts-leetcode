export {};

type Position = [number, number];
const cross = ([x1, y1]: Position, [x2, y2]: Position) => x1 * y2 - x2 * y1;
const collinear = ([[x1, y1], [x2, y2], [x3, y3]]: Position[]) =>
  cross([x2 - x1, y2 - y1], [x3 - x1, y3 - y1]) === 0;

const checkStraightLine = (points: Position[]) => points.length <
  3 ||
  points.slice(2).map((_, i) => points.slice(i, i + 3)).every(collinear);

describe("check if straight", () => {
  it("case 1", () => {
    expect(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]])).toBe(true);
  });

  it("case 2", () => {
    expect(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]])).toBe(false);
  });

  it("case 3", () => {
    expect(checkStraightLine([[1, 1], [2, 2]])).toBe(true);
  });

  it("case 4", () => {
    expect(checkStraightLine([[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [6, 7]])).toBe(false);
  });
});