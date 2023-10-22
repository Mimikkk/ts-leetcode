import { M } from "@shared/modules";

const findRotation = (mat: number[][], target: number[][]) => {
  for (let i = 0; i < 4; ++i) {
    if (M.equal(mat, target)) return true;
    mat = M.rotateBy90Degrees(mat);
  }
  return false;
};

describe("find rotation", () => {
  it("case 1", () => {
    expect(
      findRotation(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
      ),
    ).toBe(true);
  });
  it("case 2", () => {
    expect(
      findRotation(
        [
          [0, 1],
          [1, 0],
        ],
        [
          [1, 0],
          [0, 1],
        ],
      ),
    ).toBe(true);
  });
  it("case 3", () => {
    expect(
      findRotation(
        [
          [0, 1],
          [1, 1],
        ],
        [
          [1, 0],
          [0, 1],
        ],
      ),
    ).toBe(false);
  });
  it("case 4", () => {
    expect(
      findRotation(
        [
          [0, 0, 0],
          [0, 1, 0],
          [1, 1, 1],
        ],
        [
          [1, 1, 1],
          [0, 1, 0],
          [0, 0, 0],
        ],
      ),
    ).toBe(true);
  });
});
