export namespace Slabs {
  interface Vec3 {
    x: number;
    y: number;
    z: number;
  }

  export namespace Vec3 {
    export const hash = ({ x, y, z }: Vec3): string => `${x},${y},${z}`;
  }

  const vec3 = (x: number, y: number, z: number): Vec3 => ({ x, y, z });

  export type IdVecMap = Record<string, number>;
  export type BrickMap = Record<number, Brick>;

  interface Brick {
    id: number;
    start: Vec3;
    end: Vec3;
  }

  export namespace Brick {
    export const topIds = (map: IdVecMap, brick: Brick) => {
      const ids = new Set<number>();
      const z = brick.end.z + 1;

      for (let x = brick.start.x, xt = brick.end.x; x <= xt; ++x) {
        for (let y = brick.start.y, yt = brick.end.y; y <= yt; ++y) {
          if (map[Vec3.hash({ x, y, z })] !== undefined) {
            ids.add(map[Vec3.hash({ x, y, z })]);
          }
        }
      }
      return ids;
    };

    export const underIds = (map: IdVecMap, brick: Brick) => {
      const ids = new Set<number>();
      const z = brick.start.z - 1;
      if (z === 0) return ids;

      for (let x = brick.start.x, xt = brick.end.x; x <= xt; ++x) {
        for (let y = brick.start.y, yt = brick.end.y; y <= yt; ++y) {
          if (map[Vec3.hash({ x, y, z })] !== undefined) {
            ids.add(map[Vec3.hash({ x, y, z })]);
          }
        }
      }
      return ids;
    };

    export const someUnder = (map: IdVecMap, brick: Brick): boolean => {
      const z = brick.start.z - 1;
      if (z === 0) return false;

      for (let x = brick.start.x, xt = brick.end.x; x <= xt; ++x) {
        for (let y = brick.start.y, yt = brick.end.y; y <= yt; ++y) {
          if (map[Vec3.hash({ x, y, z })] !== undefined) return true;
        }
      }
      return false;
    };
  }

  const brick = (id: number, start: Vec3, end: Vec3): Brick => ({
    id,
    start,
    end,
  });

  export const fall = (bricks: Brick[]): [IdVecMap, Brick[]] => {
    const idByPosition: IdVecMap = {};

    for (const brick of bricks) {
      while (!Brick.someUnder(idByPosition, brick) && brick.start.z > 1) {
        --brick.start.z;
        --brick.end.z;
      }

      for (let x = brick.start.x, xt = brick.end.x; x <= xt; ++x) {
        for (let y = brick.start.y, yt = brick.end.y; y <= yt; ++y) {
          for (let z = brick.start.z, zt = brick.end.z; z <= zt; ++z) {
            idByPosition[Vec3.hash({ x, y, z })] = brick.id;
          }
        }
      }
    }

    return [idByPosition, bricks];
  };

  export const canDisintegrate = (vecMap: IdVecMap, byId: BrickMap, brick: Brick): boolean => {
    for (const id of Brick.topIds(vecMap, brick)) {
      const other = byId[id];
      if (other === undefined) continue;
      if (Brick.underIds(vecMap, other).size === 1) return false;
    }

    return true;
  };

  export const supports = (vecMap: IdVecMap, byId: BrickMap, brick: Brick): number => {
    const stack: Brick[] = [brick];
    const support = new Set([brick.id]);

    const hasDifference = (a: Set<number>, b: Set<number>): boolean => {
      for (let item of a) if (!b.has(item)) return true;
      return false;
    };

    while (stack.length) {
      const brick = stack.pop()!;

      for (let id of Brick.topIds(vecMap, brick)) {
        const brick = byId[id];
        if (hasDifference(Brick.underIds(vecMap, brick), support)) continue;
        support.add(brick.id);
        stack.push(brick);
      }
    }

    return support.size - 1;
  };

  const { min, max } = Math;
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
      .sort(([, , z1, , , z2], [, , z3, , , z4]) => {
        const a = min(z1, z2);
        const b = max(z1, z2);
        const c = min(z3, z4);
        const d = max(z3, z4);

        if (a < c) return -1;
        if (a > c) return 1;
        if (b < d) return -1;
        if (b > d) return 1;
        return 0;
      })
      .map(([x1, y1, z1, x2, y2, z2], id) =>
        brick(id, vec3(min(x1, x2), min(y1, y2), min(z1, z2)), vec3(max(x1, x2), max(y1, y2), max(z1, z2))),
      );
}
