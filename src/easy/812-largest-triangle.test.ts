export {};

type Point = [number, number];

const doesTurnRightRelativeTo = ([x1, y1]: Point, [x2, y2]: Point, [x3, y3]: Point) =>
  cross([x2 - x1, y2 - y1], [x3 - x1, y3 - y1]) < 0;

const collinear = ([x1, y1]: Point, [x2, y2]: Point, [x3, y3]: Point) =>
  cross([x2 - x1, y2 - y1], [x3 - x1, y3 - y1]) === 0;
const distance = ([x1, y1]: Point, [x2, y2]: Point) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
const cross = ([x1, y1]: Point, [x2, y2]: Point) => x1 * y2 - x2 * y1;

const triangleArea = ([x1, y1]: Point, [x2, y2]: Point, [x3, y3]: Point) => {
  const a = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const b = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);
  const c = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);

  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};

const computeHull = (points: Point[]) => {
  let leftMostPoint = points.reduce((acc, cur) => (acc[0] < cur[0] ? acc : cur));
  let a = leftMostPoint;

  const next = (a: Point) => points[(points.indexOf(a) + 1) % points.length];

  const h = [];
  do {
    h.push(a);
    let c = next(a);

    for (const b of points) {
      if (b === a || b === c) continue;

      if (doesTurnRightRelativeTo(c, a, b) || (collinear(c, a, b) && distance(a, b) > distance(a, c))) {
        c = b;
      }
    }

    a = c;
  } while (a !== leftMostPoint);

  return h;
};

const largestTriangleArea = (points: Point[]) => {
  const hall = computeHull(points);
  const calculateArea = (a: number, b: number, c: number) => triangleArea(hall[a], hall[b], hall[c]);

  let a = 0;
  let b = 1;
  let c = 2;
  let max = calculateArea(a, b, c);

  do {
    while (true) {
      const c_ = c + 1 < hall.length ? calculateArea(a, b, c + 1) : null;
      const b_ = b + 1 < hall.length ? calculateArea(a, b + 1, c) : null;
      const area = calculateArea(a, b, c);

      if (c_ && c_ >= area) ++c;
      else if (b_ && b_ >= area) ++b;
      else break;
    }

    max = Math.max(max, calculateArea(a, b, c));
  } while (++a < hall.length);

  return max;
};

describe("largest triangle area", () => {
  it("case 1", () => {
    expect(
      largestTriangleArea([
        [0, 0],
        [0, 1],
        [1, 0],
        [0, 2],
        [2, 0],
      ]),
    ).toBeCloseTo(2);
  });

  it("case 2", () => {
    expect(
      largestTriangleArea([
        [1, 0],
        [0, 0],
        [0, 1],
      ]),
    ).toBeCloseTo(0.5);
  });
});
