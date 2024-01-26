import type { exercise } from "@shared/utilities/exercise.js";

export namespace S1_1314 {
  export const matrixBlockSum = (mat: number[][], k: number): number[][] => {
    const withinRange = (i: number, j: number): boolean => i >= 0 && i < mat.length && j >= 0 && j < mat[i].length;

    return mat.map((row, i) => {
      return row.map((_, j) => {
        let sum = 0;

        for (let x = i + k; x >= i - k; --x) {
          for (let y = j + k; y >= j - k; --y) {
            if (withinRange(x, y)) sum += mat[x][y];
          }
        }

        return sum;
      });
    });
  };
}

export namespace S2_1314 {
  export const matrixBlockSum = (matrix: number[][], k: number): number[][] => {
    const m = matrix.length;
    const n = matrix[0].length;
    const ranges = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        ranges[i][j] = matrix[i - 1][j - 1] - ranges[i - 1][j - 1] + ranges[i][j - 1] + ranges[i - 1][j];
      }
    }

    const answer = matrix.map(() => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
      const r1 = Math.max(0, i - k);
      const r2 = Math.min(m, i + k + 1);

      for (let j = 0; j < n; j++) {
        const c1 = Math.max(0, j - k);
        const c2 = Math.min(n, j + k + 1);

        answer[i][j] = ranges[r2][c2] - ranges[r1][c2] - ranges[r2][c1] + ranges[r1][c1];
      }
    }

    return answer;
  };
}

export namespace T_1314 {
  export const solutions = [S1_1314, S2_1314];

  export const cases = [
    [
      [
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        1,
      ],
      [
        [12, 21, 16],
        [27, 45, 33],
        [24, 39, 28],
      ],
    ],
  ] satisfies exercise.cases<(typeof solutions)[number]["matrixBlockSum"]>;
}
