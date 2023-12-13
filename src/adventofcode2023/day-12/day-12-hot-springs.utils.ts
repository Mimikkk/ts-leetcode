import { range } from "../utils/utils.js";

export type Schema = [Schema.Cell[], number[]];

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

  export const extend = ([cells, sizes]: Schema, times: number): Schema => [
    range(0, times - 1)
      .map(() => cells)
      .join(Cell.Unknown)
      .split("") as Cell[],
    range(0, times).flatMap(() => sizes),
  ];

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
