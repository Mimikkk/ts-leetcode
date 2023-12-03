import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./3-gear-ratios.case.txt?raw";
import UserCase from "./3-gear-ratios.user.txt?raw";

namespace Gear {
  export const isDigit = (char: string) => char >= "0" && char <= "9";
  export const isGear = (char: string) => char === "*";

  const findStart = (schema: string[], i: number, j: number) => {
    while (isDigit(schema[i][j])) --j;
    return ++j;
  };
  const findEnd = (schema: string[], i: number, j: number) => {
    while (isDigit(schema[i][j])) ++j;
    return --j;
  };

  export const findNumber = (schema: string[], i: number, j: number) => {
    const start = findStart(schema, i, j);
    const end = findEnd(schema, i, j);

    return [start, end, +schema[i].substring(start, end + 1)] as const;
  };
}

export const gearRatios = (input: string): number => {
  const schema = input.split("\n").filter((x) => x);

  let sum = 0;
  const n = schema.length;
  const m = schema[0].length;
  for (let i = 0; i < n; ++i) {
    const minx = Math.max(i - 1, 0);
    const maxx = Math.min(i + 2, n);
    numbers: for (let j = 0; j < m; ++j) {
      if (!Gear.isGear(schema[i][j])) continue;
      const miny = Math.max(j - 1, 0);
      const maxy = Math.min(j + 2, m);

      let nvalue: undefined | number = undefined;
      let nindex: undefined | number = undefined;
      let nstart: undefined | number = undefined;
      let nend: undefined | number = undefined;
      for (let x = minx; x < maxx; ++x) {
        for (let y = miny; y < maxy; ++y) {
          if ((x === i && y === j) || !Gear.isDigit(schema[x][y])) continue;
          if (nindex === x && nstart! <= y && nend! >= y) continue;

          const [start, end, value] = Gear.findNumber(schema, x, y);

          if (nvalue === undefined) {
            nvalue = value;
            nindex = x;
            nstart = start;
            nend = end;
            continue;
          }
          sum += nvalue * value;
          continue numbers;
        }
      }
    }
  }

  return sum;
};

exercise(gearRatios, [
  [[TestCase], 467835],
  // [[UserCase], 72246648],
]);
