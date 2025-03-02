import { createDay } from '../../utils/createDay.ts';

const odds = (input: string): number => {
  interface Hailstone {
    px: number;
    py: number;
    pz: number;
    vx: number;
    vy: number;
    vz: number;
  }

  const findIntersection = (
    p1x: number,
    v1x: number,
    p1y: number,
    v1y: number,
    p2x: number,
    v2x: number,
    p2y: number,
    v2y: number,
  ) => {
    const [x1, x2, y1, y2] = [p1x, p1x + 100000000000000 * v1x, p1y, p1y + 100000000000000 * v1y];
    const [x3, x4, y3, y4] = [p2x, p2x + 100000000000000 * v2x, p2y, p2y + 100000000000000 * v2y];

    const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (denominator === 0) return false;

    const x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denominator;
    const y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denominator;

    return { x, y };
  };

  const time = (s: number, v: number, p: number) => (p - s) / v;

  const hailstones: Hailstone[] = [];
  const min = 200000000000000;
  const max = 400000000000000;

  for (const line of input.split(/\r?\n/).filter((x) => x)) {
    const [positions, velocity] = line.split(' @ ');
    const [px, py, pz] = positions.split(', ').map((n) => Number(n));
    const [vx, vy, vz] = velocity.split(', ').map((n) => Number(n));

    hailstones.push({ px, py, pz, vx, vy, vz });
  }

  let count = 0;
  for (let i = 0, it = hailstones.length; i < it; ++i) {
    for (let j = i + 1; j < it; ++j) {
      const h1 = hailstones[i];
      const h2 = hailstones[j];

      const intersection = findIntersection(h1.px, h1.vx, h1.py, h1.vy, h2.px, h2.vx, h2.py, h2.vy);
      if (!intersection) continue;

      const { x, y } = intersection;
      if (x < min || x > max || y < min || y > max) continue;

      const timeH1 = time(h1.px, h1.vx, x);
      const timeH2 = time(h2.px, h2.vx, x);
      if (timeH1 < 0 || timeH2 < 0) continue;

      count++;
    }
  }
  return count;
};

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:day-24-odds.case.txt',
        result: 0,
      },
      user: {
        input: 'file:day-24-odds.user.txt',
        result: 27732,
      },
    },
    prepare: (x) => x,
    solve: (input) => odds(input),
  },
});
