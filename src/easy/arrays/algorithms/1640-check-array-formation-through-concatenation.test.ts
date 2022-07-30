import { A } from "shared/modules/arrays";

const canFormArray = (arr: number[], pieces: number[][]): boolean => {
  let piecesAdded = 0;
  pieces.sort((a, b) => A.N.desc(a.length, b.length));

  while (true) {
    let hasAddedAnything = false;

    every_piece: for (const piece of pieces) {
      for (let i = 0; i < piece.length; ++i) {
        const part = piece[i];
        if (part === arr[piecesAdded + i]) {
          if (i === piece.length - 1) {
            piecesAdded += piece.length;
            hasAddedAnything = true;
            break every_piece;
          }
        } else break;
      }
    }

    if (!hasAddedAnything) break;
  }

  return piecesAdded === arr.length;
};

describe("can form array", () => {
  it("should return true", () => {
    expect(canFormArray([15, 88], [[88], [15]])).toBe(true);
    expect(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]])).toBe(true);
  });

  it("should return false", () => {
    expect(canFormArray([49, 18, 16], [[16, 18, 49]])).toBe(false);
    expect(canFormArray([15, 88], [[88], [15, 91]])).toBe(false);
    expect(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91, 15]])).toBe(
      false,
    );
  });
});
