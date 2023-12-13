import { createMatrix } from "../day-10/10-pipe-maze.utils.js";

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

export const range = (a: number, b: number) =>
  Array(b - a + 1)
    .fill(undefined)
    .map((_, i) => a + i);
