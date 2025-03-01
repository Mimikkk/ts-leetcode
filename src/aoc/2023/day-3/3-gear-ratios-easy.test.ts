import { exercise } from "@shared/utilities/exercise.ts";
const TestCase = await Deno.readTextFile("./3-gear-ratios.case.txt");
const UserCase = await Deno.readTextFile("./3-gear-ratios.user.txt");

namespace Gear {
  export const isDigit = (char: string) => char >= "0" && char <= "9";

  export const isPart = (schema: string[], minx: number, maxx: number, miny: number, maxy: number) => {
    for (let x = minx; x < maxx; ++x)
      for (let y = miny; y < maxy; ++y) {
        if (!isDigit(schema[x][y]) && schema[x][y] !== ".") return true;
      }
    return false;
  };
}

export const gearRatios = (input: string): number => {
  const schema = input.split("\r\n").filter((x) => x);

  let sum = 0;

  const n = schema.length;
  const m = schema[0].length;
  for (let i = 0; i < n; ++i) {
    const minx = Math.max(i - 1, 0);
    const maxx = Math.min(i + 2, n);
    for (let j = 0; j < m; ++j) {
      if (!Gear.isDigit(schema[i][j])) continue;

      let start = j;
      while (Gear.isDigit(schema[i][j])) ++j;
      const miny = Math.max(start - 1, 0);
      const maxy = Math.min(j + 1, m);

      if (Gear.isPart(schema, minx, maxx, miny, maxy)) sum += +schema[i].substring(start, j);
    }
  }

  return sum;
};

exercise(gearRatios, [
  [[TestCase], 4361],
  [[UserCase], 498559],
]);
