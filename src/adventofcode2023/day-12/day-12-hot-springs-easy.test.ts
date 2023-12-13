import { exercise } from "@shared/utilities/exercise.js";
import Test1Case from "./day-12-hot-springs.case-1.txt?raw";
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
      if (result[i][pointer] !== " ") continue;
      result[i][pointer] = cursor;
      break;
    }
  }

  return [line, ...result.map((line) => line.join(""))].join("\n");
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
    next: for (let i = 0; i < cells.length; ++i) {
      if (cells[i] === Cell.Operational) continue;

      let start = i;
      here: for (let size of sizes) {
        while (cells[start] === Cell.Operational) ++start;
        console.log({ size, start, i });
        console.log(
          withCursors(cells.join(""), [
            [i, "red"],
            [start, "green"],
          ]),
        );
        let damagedCount = 0;
        let unknownCount = 0;

        while (true) {
          let range = start - i + 1;

          if (cells[start] === Cell.Operational) break;

          if (cells[start] === Cell.Damaged) {
            ++damagedCount;
          } else {
            ++unknownCount;
          }

          if (range < size) {
            ++start;
            continue;
          }
          // Element Fits schema

          console.log({ range, start, size, damagedCount, unknownCount });
          console.log(
            withCursors(cells.join(""), [
              [i, "red"],
              [start, "green"],
            ]),
          );

          ++start;
          break;
        }
        console.log("broken");
      }

      break;
    }

    return 0;
  };
}

const springs = (input: string): number =>
  Schema.parse(input)
    .map(Schema.countArrangements)
    .reduce((a, b) => a + b, 0);

exercise(springs, [
  [[Test1Case], 4],
  // [[Test2Case], 21],
  // [[UserCase], 9647174],
]);
