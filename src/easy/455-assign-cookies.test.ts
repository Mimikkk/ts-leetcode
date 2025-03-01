import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const findContentChildren = (greediness: number[], sizes: number[]): number => {
  greediness.sort((a, b) => a - b);
  sizes.sort((a, b) => a - b);

  let greedIndex = 0;
  let sizeIndex = 0;

  let contentCount = 0;

  while (greedIndex < greediness.length && sizeIndex < sizes.length) {
    if (greediness[greedIndex] <= sizes[sizeIndex]) {
      ++contentCount;
      ++greedIndex;
    }
    ++sizeIndex;
  }

  return contentCount;
};

describe("find content children", () => {
  it("correct children", () => {
    expect(findContentChildren([1, 2, 3], [1, 1])).toEqual(1);
  });

  it("no children", () => {
    expect(findContentChildren([1, 2], [3, 3, 3])).toEqual(2);
  });

  it("no g", () => {
    expect(findContentChildren([], [1, 2, 3])).toEqual(0);
  });

  it("no g", () => {
    expect(findContentChildren([1, 2], [1, 2, 3])).toEqual(2);
  });
});