export class QuadTree {
  value: boolean;
  isLeaf: boolean;
  topLeft: QuadTree | null;
  topRight: QuadTree | null;
  bottomLeft: QuadTree | null;
  bottomRight: QuadTree | null;

  constructor(
    value: boolean,
    isLeaf: boolean,
    topLeft?: QuadTree | null,
    topRight?: QuadTree | null,
    bottomLeft?: QuadTree | null,
    bottomRight?: QuadTree | null,
  ) {
    this.value = value;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft ?? null;
    this.topRight = topRight ?? null;
    this.bottomLeft = bottomLeft ?? null;
    this.bottomRight = bottomRight ?? null;
  }
}

export namespace QuadTree {
  export type NodeDisplay = (0 | 1)[][];

  export const node = (grid: NodeDisplay): QuadTree | null => {
    const n = grid.length;
    if (n === 0) return null;

    const isLeaf = (x: number, y: number, size: number): boolean => {
      const value = grid[x][y];
      for (let i = x; i < x + size; ++i) {
        for (let j = y; j < y + size; ++j) {
          if (grid[i][j] !== value) return false;
        }
      }
      return true;
    };

    const recurse = (x: number, y: number, size: number): QuadTree | null => {
      if (isLeaf(x, y, size)) return new QuadTree(grid[x][y] === 1, true);

      const half = ~~(size / 2);
      return new QuadTree(
        false,
        false,
        recurse(x, y, half),
        recurse(x, y + half, half),
        recurse(x + half, y, half),
        recurse(x + half, y + half, half),
      );
    };

    return recurse(0, 0, n);
  };
}
