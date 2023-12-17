export const colors = {
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
};
export type Color = keyof typeof colors;
export const chalk = (input: string, color: Color) => `\x1b[${colors[color]}m${input}\x1b[0m`;

export const withCursors = (line: string | string[], cursors: [number, Color][]) => {
  const pointers = cursors.map(([pointer, color]) => [pointer, chalk("^", color)] as const);

  let counter = new Map<number, number>();
  pointers.forEach(([pointer]) => counter.set(pointer, (counter.get(pointer) ?? 0) + 1));

  let lineCount = Math.max(...counter.values());

  const result = createMatrix(lineCount, line.length, " ");

  for (const [pointer, cursor] of pointers) {
    for (let i = 0; i < counter.get(pointer)!; ++i) {
      if (result[i][pointer] !== " ") continue;
      result[i][pointer] = cursor;
      break;
    }
  }

  return [Array.isArray(line) ? line.join("") : line, ...result.map((line) => line.join(""))].join("\n");
};

export const withColors = <T>(
  map: T[][],
  positions: readonly (readonly [number, number, Color])[],
  separator: string = "",
) => {
  const result = structuredClone(map.map((x) => x.map((x) => `${x}`)));

  for (let i = 0, it = result.length, jt = result[0].length; i < it; ++i) {
    for (let j = 0; j < jt; ++j) {
      if (result[i][j] === "Infinity" || result[i][j] === "-Infinity") result[i][j] = "I";
    }
  }
  for (const [i, j, color] of positions) result[i][j] = chalk(result[i][j], color);

  return result.map((line) => line.join(separator)).join("\n");
};

export const range = (a: number, b: number) =>
  Array(b - a + 1)
    .fill(undefined)
    .map((_, i) => a + i);

export const createMatrix = <T>(n: number, m: number, value: T | (() => T)): T[][] =>
  Array(n)
    .fill(0)
    .map(() =>
      Array(m)
        .fill(0)
        .map(() => (value instanceof Function ? value() : value)),
    );
