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
      .map(() => cells.join(""))
      .join(Cell.Unknown)
      .split("") as Cell[],
    range(0, times - 1).flatMap(() => sizes),
  ];

  // rewrite using caching
  const combinations = (cells: Cell[], replacements: number) => {
    const result: Cell[][] = [];

    const recurse = (cells: Cell[], replacements: number, index: number) => {
      if (replacements === 0) {
        result.push(cells);
        return;
      }

      for (let i = index; i < cells.length; ++i) {
        if (cells[i] !== Cell.Unknown) continue;

        const copy = [...cells];
        copy[i] = Cell.Damaged;

        recurse(copy, replacements - 1, i + 1);
      }
    };

    recurse(cells, replacements, 0);
    return result;
  };
  export const countArrangements = (schema: Schema): number => {
    const [cells, sizes] = schema;

    return range(0, cells.filter((x) => x === Cell.Unknown).length)
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
