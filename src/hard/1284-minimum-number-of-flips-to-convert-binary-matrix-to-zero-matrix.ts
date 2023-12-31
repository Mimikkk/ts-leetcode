export namespace Sol1_1284 {
  type Matrix = number[][] & { n: number; m: number; hash(): string };

  const flip = (matrix: Matrix, i: number, j: number) => {
    matrix[i][j] = matrix[i][j] === 0 ? 1 : 0;

    if (i > 0) matrix[i - 1][j] = matrix[i - 1][j] === 0 ? 1 : 0;
    if (i < matrix.n - 1) matrix[i + 1][j] = matrix[i + 1][j] === 0 ? 1 : 0;
    if (j > 0) matrix[i][j - 1] = matrix[i][j - 1] === 0 ? 1 : 0;
    if (j < matrix.m - 1) matrix[i][j + 1] = matrix[i][j + 1] === 0 ? 1 : 0;
  };

  const hasOne = (matrix: Matrix): boolean => {
    const { n, m } = matrix;

    for (let i = 0; i < n; ++i) for (let j = 0; j < m; ++j) if (matrix[i][j] === 1) return true;
    return false;
  };

  const asMatrix = (mat: number[][]): Matrix => {
    const matrix = mat as Matrix;
    matrix.n = mat.length;
    matrix.m = mat[0].length;
    matrix.hash = () => JSON.stringify(matrix);

    return matrix;
  };

  export const minFlips = (mat: number[][]): number => {
    const matrix = asMatrix(mat);

    const visited: Record<string, boolean> = {};
    const dp: Record<string, number> = {};

    (function dfs() {
      let key = matrix.hash();

      if (dp[key] !== undefined) return dp[key];
      if (visited[key]) return Infinity;

      visited[key] = true;
      if (!hasOne(matrix)) {
        dp[key] = 0;
        return 0;
      }

      let min = Infinity;
      for (let i = 0; i < matrix.n; ++i) {
        for (let j = 0; j < matrix.m; ++j) {
          flip(matrix, i, j);

          let value = dfs() + 1;
          if (value < min) min = value;

          flip(matrix, i, j);
        }
      }

      dp[key] = min;
      return min;
    })();

    const key = matrix.hash();
    return dp[key] === Infinity ? -1 : dp[key];
  };
}

export namespace Sol2_1284 {
  type Matrix = number[][] & { n: number; m: number; hash(): string };

  const flip = (matrix: Matrix, i: number, j: number) => {
    matrix[i][j] = matrix[i][j] === 0 ? 1 : 0;

    if (i > 0) matrix[i - 1][j] = matrix[i - 1][j] === 0 ? 1 : 0;
    if (i < matrix.n - 1) matrix[i + 1][j] = matrix[i + 1][j] === 0 ? 1 : 0;
    if (j > 0) matrix[i][j - 1] = matrix[i][j - 1] === 0 ? 1 : 0;
    if (j < matrix.m - 1) matrix[i][j + 1] = matrix[i][j + 1] === 0 ? 1 : 0;
  };

  const hasOne = (matrix: Matrix): boolean => {
    const { n, m } = matrix;

    for (let i = 0; i < n; ++i) for (let j = 0; j < m; ++j) if (matrix[i][j] === 1) return true;
    return false;
  };

  const asMatrix = (mat: number[][]): Matrix => {
    const matrix = mat as Matrix;
    matrix.n = mat.length;
    matrix.m = mat[0].length;
    matrix.hash = () => {
      let str = "";
      for (let i = 0; i < matrix.n; ++i) for (let j = 0; j < matrix.m; ++j) str += matrix[i][j];
      return str;
    };

    return matrix;
  };

  export const minFlips = (mat: number[][]): number => {
    const matrix = asMatrix(mat);

    const visited = new Set<string>();
    const flips = new Map<string, number>();

    (function recurse() {
      let key = matrix.hash();

      let flipValue = flips.get(key);
      if (flipValue !== undefined) return flipValue;
      if (visited.has(key)) return Infinity;

      visited.add(key);
      if (!hasOne(matrix)) {
        flips.set(key, 0);
        return 0;
      }

      let min = Infinity;
      for (let i = 0; i < matrix.n; ++i) {
        for (let j = 0; j < matrix.m; ++j) {
          flip(matrix, i, j);

          let value = recurse() + 1;
          if (value < min) min = value;

          flip(matrix, i, j);
        }
      }

      flips.set(key, min);

      return min;
    })();

    const value = flips.get(matrix.hash());
    return value === Infinity ? -1 : value!;
  };
}
