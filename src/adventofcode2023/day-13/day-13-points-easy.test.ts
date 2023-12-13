import { exercise } from "@shared/utilities/exercise.js";
import Test1Case from "./day-12-hot-springs.case-1.txt?raw";
import { createMatrix } from "../day-10/10-pipe-maze.utils.js";
import Test2Case from "./day-12-hot-springs.case-2.txt?raw";
import UserCase from "./day-12-hot-springs.user.txt?raw";

export type Schema = [Schema.Cell[], number[]];

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

export namespace Schema {
  export enum Cell {
    Operational = ".",
    Damaged = "#",
    Unknown = "?",
  }

  export const parse = (input: string): Schema[] =>
    input
      .split(/\r?\n/)
      .filter((line) => line)
      .map((line) => line.split(/ +/))
      .map(
        ([cells, sizes]) => [cells.split("") as Cell[], sizes.split(",").map((size) => +size)] as [Cell[], number[]],
      );

  const combinations = (cells: Cell[], replacements: number) => {
    const result: Cell[][] = [];

    const recurse = (index: number, cells: Cell[]) => {
      if (cells.length === replacements) {
        result.push(cells);
        return;
      }

      for (let i = index; i < cells.length; ++i) {
        const copy = cells.slice();
        copy[i] = Cell.Unknown;
        recurse(i + 1, copy);
      }
    };

    recurse(0, cells);
    return result;
  };

  export const countArrangements = (schema: Schema): number => {
    const [cells, sizes] = schema;

    return range(0, cells.length)
      .flatMap((count) => combinations(cells, count))
      .map((x) => x.map((x) => (x === Cell.Unknown ? "." : x)).join(""))
      .map((s) => s.split(/\.+/).filter((x) => x !== ""))
      .reduce((acc, perm) => {
        if (perm.length !== sizes.length) return acc;
        if (perm.every((s, i) => s.length === sizes[i])) return acc + 1;

        return acc;
      }, 0);
  };
}

const springs = (input: string): number =>
  Schema.parse(input)
    .map(Schema.countArrangements)
    .reduce((a, b) => a + b, 0);

exercise(springs, [
  [[Test1Case], 4],
  [[Test2Case], 21],
  [[UserCase], 9647174],
]);
