import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./day-24-odds.case.txt?raw";
import UserCase from "./day-24-odds.user.txt?raw";
import { range } from "../utils/utils.js";

const odds = (input: string): number => {
  interface Hailstone {
    px: number;
    py: number;
    pz: number;
    vx: number;
    vy: number;
    vz: number;
  }

  const hailstones: Hailstone[] = [];

  const velocitiesX: Record<number, number[]> = {};
  const velocitiesY: Record<number, number[]> = {};
  const velocitiesZ: Record<number, number[]> = {};

  const getRockVelocity = (velocities: Record<number, number[]>): number =>
    Object.entries(velocities)
      .filter(([, [, vy]]) => vy !== undefined)
      .reduce((acc, [v, [vx, vy]]) => acc.filter((value) => (vx - vy) % (value - +v) === 0), range(-1000, 1000))[0];

  for (const line of input.split(/\r?\n/).filter((x) => x)) {
    const [positions, velocity] = line.split(" @ ");
    const [px, py, pz] = positions.split(", ").map((n) => +n);
    const [vx, vy, vz] = velocity.split(", ").map((n) => +n);

    if (!velocitiesX[vx]) velocitiesX[vx] = [px];
    else velocitiesX[vx].push(px);

    if (!velocitiesY[vy]) velocitiesY[vy] = [py];
    else velocitiesY[vy].push(py);

    if (!velocitiesZ[vz]) velocitiesZ[vz] = [pz];
    else velocitiesZ[vz].push(pz);

    hailstones.push({ px, py, pz, vx, vy, vz });
  }

  const rvx = getRockVelocity(velocitiesX);
  const rvy = getRockVelocity(velocitiesY);
  const rvz = getRockVelocity(velocitiesZ);

  const results: Record<number, number> = {};

  for (let i = 0, it = hailstones.length; i < it; ++i) {
    for (let j = i + 1; j < it; ++j) {
      const stoneA = hailstones[i];
      const stoneB = hailstones[j];

      const ma = (stoneA.vy - rvy) / (stoneA.vx - rvx);
      const mb = (stoneB.vy - rvy) / (stoneB.vx - rvx);
      const ca = stoneA.py - ma * stoneA.px;
      const cb = stoneB.py - mb * stoneB.px;

      const rpx = (cb - ca) / (ma - mb);
      const rpy = ma * rpx + ca;

      const time = Math.round((rpx - stoneA.px) / (stoneA.vx - rvx));
      const rpz = stoneA.pz + (stoneA.vz - rvz) * time;

      const result = rpx + rpy + rpz;
      if (!results[result]) results[result] = 1;
      else ++results[result];
    }
  }

  return +Object.keys(results).sort((a, b) => results[+b] - results[+a])[0];
};

exercise(odds, [
  [[TestCase], 3],
  [[UserCase], 641619849766168],
]);
