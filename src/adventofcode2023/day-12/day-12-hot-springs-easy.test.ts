import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./day-12-hot-springs.case.txt?raw";
import { createMatrix } from "../day-10/10-pipe-maze.utils.js";

export type Schema = [Schema.Cell[], number[]];

const colors = {
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
};
type Color = keyof typeof colors;
const chalk = (input: string, color: Color) => `\x1b[${colors[color]}m${input}\x1b[0m`;

const withCursors = (line: string, cursors: [number, Color][]) => {
  const pointers = cursors.map(([pointer, color]) => [pointer, chalk("^", color)] as const);

  let counter = new Map<number, number>();
  for (const [pointer] of pointers) {
    const value = counter.get(pointer);
    if (value === undefined) counter.set(pointer, 1);
    else counter.set(pointer, value + 1);
  }
  let lineCount = Math.max(...counter.values());

  const result = createMatrix(lineCount, line.length, " ");

  for (const [pointer, cursor] of pointers) {
    for (let i = 0; i < counter.get(pointer)!; ++i) {
      if (result[lineCount - i - 1][pointer] !== " ") break;
      result[lineCount - i - 1][pointer] = cursor;
    }
  }

  return [line, ...result.map((x) => x.join(""))].join("\n");
};

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

  export const countArrangements = ([cells, sizes]: Schema): number => {
    console.log(
      withCursors(cells.join(""), [
        [0, "cyan"],
        [0, "red"],
      ]),
    );

    for (let i = 0; i < cells.length; ++i) {
      if (cells[i] !== Cell.Unknown) continue;

      let start = i;
      let size = sizes[0];

      while (start < cells.length) {
        let currSize = start - i;
        console.log({ currSize, p: currSize === size });
        if (currSize === size) {
          break;
        }
        ++start;
      }
    }

    return 0;
  };
}

const springs = (input: string): number =>
  Schema.parse(input)
    .map(Schema.countArrangements)
    .reduce((a, b) => a + b, 0);

exercise(springs, [
  [[TestCase], 21],
  // [[UserCase], 9647174],
]);
