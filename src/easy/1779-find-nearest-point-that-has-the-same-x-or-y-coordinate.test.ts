import { A } from "@shared/modules";

type Point = [number, number];
const distance = ([x1, y1]: Point, [x2, y2]: Point) =>
  Math.hypot(x1 - x2, y1 - y2);

const nearestValidPoint = (x: number, y: number, points: Point[]): number => {
  const distances = A.enumerate(points)
    .filter(([[x1, y1]]) => x === x1 || y === y1)
    .map(([[x1, y1], i]) => [distance([x, y], [x1, y1]), i]);

  const min = Math.min(...distances.map(A.first));

  return A.second(distances.find(([distance]) => distance === min) || [-1, -1]);
};

describe("find nearest point that has the same x or y coordinate", () => {
  it("case 1", () => {
    expect(
      nearestValidPoint(0, 0, [
        [0, 0],
        [1, 1],
        [2, 2],
      ]),
    ).toBe(0);
  });

  it("case 2", () => {
    expect(
      nearestValidPoint(0, 0, [
        [3, 3],
        [1, 1],
        [2, 2],
      ]),
    ).toBe(-1);
  });

  it("case 3", () => {
    expect(
      nearestValidPoint(3, 4, [
        [1, 2],
        [3, 1],
        [2, 4],
        [2, 3],
        [4, 4],
      ]),
    ).toBe(2);
  });
});