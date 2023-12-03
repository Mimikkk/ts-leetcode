import { A } from "@shared/modules/arrays.js";
import range = A.N.range;
export {};

const minimumRecolors = (blocks: string, k: number) => {
  let whites = range(0, k - 1).filter((i) => blocks[i] == "W").length;

  let min = whites;
  for (let j = 0; j < blocks.length - k; ++j) {
    if (blocks[j] == "W") --whites;
    if (blocks[j + k] == "W") ++whites;

    min = Math.min(min, whites);
  }

  return min;
};

describe("min recolors", () => {
  it("case 1", () => {
    expect(minimumRecolors("WW", 2)).toEqual(2);
  });
  it("case 2", () => {
    expect(minimumRecolors("WBBWWBBWBW", 7)).toEqual(3);
  });
  it("case 3", () => {
    expect(minimumRecolors("WBWBBBW", 2)).toEqual(0);
  });
});
