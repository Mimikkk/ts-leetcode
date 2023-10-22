export {};

type Position = [number, number];
const minTimeToVisitAllPoints = (points: Position[]) => {
  let time = 0;
  for (let i = 1;  i < points.length; i++) {
    const [x1, y1] = points[i - 1];
    const [x2, y2] = points[i];
    time += Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
  }

  return time;
};

describe("min time to visit all points", () => {
  it("case 1", () => {
    expect(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]])).toEqual(7);
  });

  it("case 2", () => {
    expect(minTimeToVisitAllPoints([[3, 2], [-2, 2]])).toEqual(5);
  });
});