import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


type BoxType = [number, number];
namespace BoxType {
  export const desc = ([, u1]: BoxType, [, u2]: BoxType) => u2 - u1;
}

const maximumUnits = (boxTypes: BoxType[], truckSize: number): number => {
  boxTypes.sort(BoxType.desc);
  let [loaded, units] = [0, 0];

  types: for (let [count, value] of boxTypes) {
    while (count--) {
      units += value;
      if (++loaded >= truckSize) break types;
    }
  }

  return units;
};

describe("maximum units on a truck", () => {
  it("case 1", () => {
    expect(
      maximumUnits(
        [
          [1, 3],
          [2, 2],
          [3, 1],
        ],
        4,
      ),
    ).toBe(8);
  });

  it("case 2", () => {
    expect(
      maximumUnits(
        [
          [5, 10],
          [2, 5],
          [4, 7],
          [3, 9],
        ],
        10,
      ),
    ).toBe(91);
  });
});
