export const levenshtein = (a: string, b: string): number => {
  const alen = a.length;
  const blen = b.length;

  if (alen === 0) return blen;
  if (blen === 0) return alen;

  const matrix = [];

  for (let i = 0; i <= blen; i++) {
    matrix[i] = i;
  }

  for (let i = 1; i <= alen; i++) {
    let prev = i;

    for (let j = 1; j <= blen; j++) {
      const val = a[i - 1] !== b[j - 1] ? Math.min(matrix[j], matrix[j - 1], prev) + 1 : matrix[j - 1];

      matrix[j - 1] = prev;

      prev = val;
    }

    matrix[blen] = prev;
  }

  return matrix[blen];
};

export namespace Points {
  export enum Cell {
    Rock = "#",
    Ash = ".",
  }

  export type Map = string[];

  export const parse = (input: string): Map[] => {
    const lines = input.split(/\r?\n/).concat("");

    const maps = [];
    for (let i = 0, map = []; i < lines.length; ++i) {
      if (!lines[i]) {
        maps.push(map);
        map = [];

        continue;
      }

      map.push(lines[i]);
    }

    return maps;
  };
}
