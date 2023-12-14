import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./day-13-points.case.txt?raw";

type Mirror = [number, number];
type Pattern = [Mirror[][], Mirror[][]];

namespace Mirror {
  export const find = (lines: Mirror[][], n: number): number | undefined => {
    const distance = (i: number) =>
      lines
        .map((line) => [getMask(i, n), line[i]] as const)
        .map(([mask, [a, b]]) => bitCount((a & mask) ^ (b & mask)))
        .reduce((a, b) => a + b, 0);

    for (let i = 0; i < n; ++i) if (distance(i) === 1) return i;
  };

  const bin = (num: string[]): number => parseInt(num.join(""), 2);
  export const asBin = (chars: string[]) =>
    <Mirror[]>chars.slice(0, -1).map((_, i) => [chars.slice(0, i + 1), chars.slice(i + 1).reverse()].map(bin));
}

namespace Pattern {
  const transpose = (map: string[][]): string[][] => map[0].map((_, i) => map.map((_, j) => map[j][i]));

  export const parse = (input: string): Pattern[] =>
    input
      .split(/\r?\n\r?\n/)
      .map((line) =>
        line
          .replaceAll(".", "0")
          .replaceAll("#", "1")
          .split(/\r?\n/)
          .filter((line) => line)
          .map((line) => line.split("")),
      )
      .map(Pattern.from);

  export const from = (map: string[][]): Pattern => [map.map(Mirror.asBin), transpose(map).map(Mirror.asBin)];

  export const score = ([rows, cols]: Pattern): number => {
    const column = Mirror.find(rows, cols.length - 1);
    if (column !== undefined) return column + 1;

    const row = Mirror.find(cols, rows.length - 1);
    if (row !== undefined) return (row + 1) * 100;
    return 0;
  };
}

const getMask = (index: number, length: number): number => 2 ** (Math.min(index, length - index - 1) + 1) - 1;

const bitCount = (n: number) => {
  n = n - ((n >> 1) & 0x55555555);
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
  return (((n + (n >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24;
};

const points = (input: string): number =>
  Pattern.parse(input)
    .map(Pattern.score)
    .reduce((sum, curr) => sum + curr, 0);

exercise(points, [
  [[TestCase], 400],
  // [[UserCase], 31954],
]);
