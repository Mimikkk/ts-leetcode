import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const constructRectangle = (area: number): number[] => {
  let mid = Math.floor(Math.sqrt(area));
  while (area % mid) --mid;
  return [Number(area / mid), mid];
};

describe("constructRectangle", () => {
  it("area 37", () => {
    expect(constructRectangle(37)).toEqual([37, 1]);
  });

  it("area 122122", () => {
    expect(constructRectangle(122122)).toEqual([427, 286]);
  });
});