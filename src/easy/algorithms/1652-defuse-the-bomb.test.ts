import { A } from "shared/modules";

const decrypt = (code: number[], k: number): number[] => {
  if (k === 0) return code.fill(0);

  let result = [...code];
  for (let i = 0; i < code.length; ++i) {
    if (k > 0) {
      let sum = 0;
      for (let j = 0; j < k; ++j) {
        sum += code[(i + j + 1) % code.length];
      }

      result[i] = sum;
    } else {
      let sum = 0;
      for (let j = 0; j < Math.abs(k); ++j) {
        sum += code[(i + code.length - j - 1) % code.length];
      }

      result[i] = sum;
    }
  }

  return result;
};

describe("defuse the bomb", () => {
  it("case 1", () => {
    expect(decrypt([5, 7, 1, 4], 3)).toEqual([12, 10, 16, 13]);
  });

  it("case 2", () => {
    expect(decrypt([1, 2, 3, 4], 0)).toEqual([0, 0, 0, 0]);
  });

  it("case 3", () => {
    expect(decrypt([2, 4, 9, 3], -2)).toEqual([12, 5, 6, 13]);
  });
});
