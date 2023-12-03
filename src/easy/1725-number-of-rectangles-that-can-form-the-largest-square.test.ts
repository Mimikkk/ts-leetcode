import { R } from "@shared/modules/records.js";

type Rectangle = [number, number];
const maxSquare = (rectangle: Rectangle) => Math.min(...rectangle);

const countGoodRectangles = (rectangles: Rectangle[]): number => {
  const counter = R.counter(rectangles.map(maxSquare));

  return counter[R.maxKey(counter)];
};

describe("count good rectangles", () => {
  it("case 1", () => {
    expect(
      countGoodRectangles([
        [5, 8],
        [3, 9],
        [5, 12],
        [16, 5],
      ]),
    ).toEqual(3);
    expect(
      countGoodRectangles([
        [2, 3],
        [3, 7],
        [4, 3],
        [3, 7],
      ]),
    ).toEqual(3);
  });
});
