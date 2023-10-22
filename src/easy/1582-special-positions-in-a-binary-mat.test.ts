export {};

const numSpecial = (mat: number[][]): number => {
  const [m, n] = [mat.length, mat[0].length];
  let rows = [...Array(m)].fill(0);
  let cols = [...Array(n)].fill(0);

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) {
        rows[i]++;
        cols[j]++;
      }
    }
  }

  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1 && rows[i] === 1 && cols[j] === 1) {
        count++;
      }
    }
  }

  return count;
};

describe("num special", () => {
  test("should return correct result", () => {
    expect(
      numSpecial([
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 0],
      ]),
    ).toEqual(1);
    expect(
      numSpecial([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    ).toEqual(3);
    expect(
      numSpecial([
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]),
    ).toEqual(1);
  });
});