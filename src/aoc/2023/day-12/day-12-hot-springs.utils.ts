import { contains, memoize } from '../../utils/utils.ts';
export namespace Springs {
  enum Cell {
    Operating = '.',
    Damaged = '#',
    Unknown = '?',
  }

  export type Schema = [Cell[], number[]];

  export const countArrangements = memoize(
    (conditions: Cell[], sizes: number[]): number => {
      if (!conditions.length) return sizes.length ? 0 : 1;
      if (!sizes.length) return contains(conditions, Cell.Damaged) ? 0 : 1;

      let count = 0;
      if (conditions[0] !== Cell.Damaged) count += countArrangements(conditions.slice(1), sizes);

      const [first] = sizes;
      if (
        first <= conditions.length &&
        (first === conditions.length || conditions[first] !== Cell.Damaged) &&
        !contains(conditions, Cell.Operating, 0, first)
      ) {
        count += countArrangements(conditions.slice(first + 1), sizes.slice(1));
      }

      return count;
    },
    (...args) => `${args}`,
  );

  export const extend = ([conditions, sizes]: Schema): Schema => [
    `${conditions}?${conditions}?${conditions}?${conditions}?${conditions}` as unknown as Cell[],
    [...sizes, ...sizes, ...sizes, ...sizes, ...sizes],
  ];

  export const parse = (input: string): Schema[] =>
    input
      .split(/\r?\n/)
      .map((line) => line.split(' '))
      .map(([combination, sizes]) => [combination as unknown as Cell[], sizes.split(',').map((s) => +s)]);
}
