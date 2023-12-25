import { memoize } from "../utils/utils.js";

export namespace Slabs {
  type Position = [number, number, number];
  type Brick = [Position, Position];

  const manhattan = memoize(
    ([x1, y1, z1]: Position, [x2, y2, z2]: Position) => Math.abs(x1 - x2) + Math.abs(y1 - y2) + Math.abs(z1 - z2) + 1,
  );

  export namespace Brick {
    export const volume = memoize(([start, end]: Brick) => manhattan(start, end));

    export const bresenham = memoize(([[x1, y1, z1], [x2, y2, z2]]: Brick): Position[] => {
      const dx = Math.abs(x2 - x1);
      const dy = Math.abs(y2 - y1);
      const dz = Math.abs(z2 - z1);
      const sx = x1 < x2 ? 1 : -1;
      const sy = y1 < y2 ? 1 : -1;
      const sz = z1 < z2 ? 1 : -1;
      let err = dx - dy - dz;
      const path: Position[] = [];
      while (true) {
        path.push([x1, y1, z1]);
        if (x1 === x2 && y1 === y2 && z1 === z2) break;
        const e2 = 2 * err;
        if (e2 > -dy) {
          err -= dy;
          x1 += sx;
        }
        if (e2 > -dz) {
          err -= dz;
          y1 += sy;
        }
        if (e2 < dx) {
          err += dx;
          z1 += sz;
        }
      }
      return path;
    });

    export const isOver = ([[, , z1]]: Brick, [[, , z2]]: Brick): boolean => z1 > z2;

    export const compare = ([start1, end1]: Brick, [start2, end2]: Brick): number => {
      const [x1, y1, z1] = start1;
      const [x2, y2, z2] = start2;
      if (z1 < z2) return -1;
      if (z1 > z2) return 1;
      if (y1 < y2) return -1;
      if (y1 > y2) return 1;
      if (x1 < x2) return -1;
      if (x1 > x2) return 1;
      return 0;
    };
  }

  export const fall = (bricks: Brick[]): Brick[] => {
    return bricks;
  };

  export const canDisintegrate = (bricks: Brick[], brick: Brick): boolean => {
    return false;
  };

  export const supports = (bricks: Brick[], brick: Brick): Brick[] => {
    return [];
  };

  const regex = /(\d+),(\d+),(\d+)~(\d+),(\d+),(\d+)/;
  export const parse = (input: string): Brick[] =>
    input
      .split(/\r?\n/)
      .filter((line) => line)
      .map((line) =>
        line
          .match(regex)!
          .splice(1)
          .map((n) => +n),
      )
      .map(
        ([x1, y1, z1, x2, y2, z2]) =>
          [
            [x1, y1, z1],
            [x2, y2, z2],
          ] as const,
      );
}
