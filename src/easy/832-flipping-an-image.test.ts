export {};

const reverse = (arr: number[]) => arr.reverse();
const invert = (arr: number[]) => arr.map((x) => x ^ 1);
const flipAndInvertImage = (image: number[][]): number[][] => image.map(reverse).map(invert);

describe("flip and invert image", () => {
  it("case 1", () => {
    expect(
      flipAndInvertImage([
        [1, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
      ]),
    ).toEqual([
      [1, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ]);
  });

  it("case 2", () => {
    expect(
      flipAndInvertImage([
        [1, 1, 0, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 0, 1, 0],
      ]),
    ).toEqual([
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 1],
      [1, 0, 1, 0],
    ]);
  });
});