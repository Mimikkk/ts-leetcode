import { Position } from '../day-10/10-pipe-maze.utils.ts';
import { createDay } from '../../utils/createDay.ts';

namespace Counter {
  const key = (i: number, j: number): string => `${i},${j}`;

  interface Grid {
    walls: Set<string>;
    plots: Map<string, number>;
    start: Position;
    n: number;
    m: number;
  }

  const parse = (input: string): Grid => {
    const grid = input.split(/\r?\n/).map((line) => line.trim());
    const walls = new Set<string>();
    const plots = new Map<string, number>();
    let start: [i: number, j: number] = undefined!;
    let n = grid.length;
    let m = grid[0].length;

    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < m; ++j) {
        if (grid[i][j] == '#') walls.add(key(i, j));
        else if (grid[i][j] == 'S') {
          plots.set(key(i, j), 0);
          start = [i, j];
        }
      }
    }

    return { walls, plots, start, n, m };
  };

  const wrap = ({ n, m }: Grid, i: number, j: number): Position => {
    i = i % n;
    j = j % m;

    return [i > 0 ? i : n + i, j > 0 ? j : m + j];
  };

  const movement = (map: Grid, i: number, j: number, remaining: number): [number, number, number][] => {
    const k = key(i, j);
    const wk = key(...wrap(map, i, j));

    if (map.walls.has(wk) || map.plots.get(k)! >= remaining) return [];
    map.plots.set(k, remaining);

    return remaining
      ? [
        [i + 1, j, remaining - 1],
        [i - 1, j, remaining - 1],
        [i, j + 1, remaining - 1],
        [i, j - 1, remaining - 1],
      ]
      : [];
  };

  const start = (map: Grid, steps: number = 64) => {
    const queue: [number, number, number][] = [[map.start[0], map.start[1], steps]];

    while (queue.length) queue.push(...movement(map, ...queue.shift()!));

    let even = 0;
    for (let value of map.plots.values()) if (value % 2 == 0) ++even;
    return even;
  };

  const polyfit = (a: number, b: number, c: number): [number, number, number] => [
    (a + c) / 2 - b,
    -a - (a + c) / 2 + b + b,
    a,
  ];

  export const solve = (input: string): number => {
    const map = parse(input);
    let arg0 = 65;
    let arg1 = 131;

    const [a, b, c] = polyfit(start(map, arg0), start(map, arg0 + arg1), start(map, arg0 + arg1 + arg1));

    const steps = 26_501_365;
    const x = (steps - 65) / 131;
    return a * x ** 2 + b * x + c;
  };
}

createDay({
  hard: {
    cases: {
      user: {
        input: 'file:day-21-counter.user',
        result: 596857397104703,
      },
    },
    prepare: (x) => x,
    solve: (input) => Counter.solve(input),
  },
});
