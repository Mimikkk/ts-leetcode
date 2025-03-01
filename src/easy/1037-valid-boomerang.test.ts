import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


type Position = [number, number];
const cross = ([x1, y1]: Position, [x2, y2]: Position) => x1 * y2 - x2 * y1;
const collinear = ([x1, y1]: Position, [x2, y2]: Position, [x3, y3]: Position) =>
  cross([x2 - x1, y2 - y1], [x3 - x1, y3 - y1]) === 0;

const isBoomerang = (points: [Position, Position, Position]) => !collinear(...points);

describe("valid boomerang", () => {
  it("case 1", () => {
    expect(
      isBoomerang([
        [1, 1],
        [2, 3],
        [3, 2],
      ]),
    ).toBe(true);
  });

  it("case 2", () => {
    expect(
      isBoomerang([
        [1, 1],
        [2, 2],
        [3, 3],
      ]),
    ).toBe(false);
  });
});