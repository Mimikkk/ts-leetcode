import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const Max = 100;
const numberOfLines = (widths: number[], s: string): [number, number] => {
  let lines = 1;
  let linewidth = 0;
  for (const c of s) {
    const charwidth = widths[c.charCodeAt(0) - 97];
    if (linewidth + charwidth > Max) {
      ++lines;
      linewidth = 0;
    }

    linewidth += charwidth;
  }

  return [lines, linewidth];
};

describe("number of lines", () => {
  it("case 1", () => {
    expect(
      numberOfLines(
        [
          10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
          10,
        ],
        "abcdefghijklmnopqrstuvwxyz",
      ),
    ).toEqual([3, 60]);
  });

  it("case 2", () => {
    expect(
      numberOfLines(
        [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        "bbbcccdddaaa",
      ),
    ).toEqual([2, 4]);
  });
});