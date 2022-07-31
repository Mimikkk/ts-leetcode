export module A {
  export const first = <T, Y = undefined>(arr: T[], or?: Y): T | Y =>
    (arr[0] === undefined ? or : arr[0])!;

  export const last = <T, Y = undefined>(arr: T[], or?: Y): T | Y =>
    (arr.at(-1) === undefined ? or : arr.at(-1))!;

  export const sorted = <T>(arr: T[], fn: (a: T, b: T) => number) =>
    [...arr].sort(fn);

  export const reversed = <T>(arr: T[]) => arr.reverse();

  export const pairs = <T>(arr: T[]): Pair<T>[] => {
    const result: Pair<T>[] = [];

    for (let i = 0; i < arr.length; ++i) {
      for (let j = i + 1; j < arr.length; ++j) {
        result.push([arr[i], arr[j]]);
      }
    }

    return result;
  };

  export const windows = <Size extends number, T>(
    arr: T[],
    size: Size,
  ): Tuple<T, Size>[] => {
    const result: Tuple<T, Size>[] = [];

    for (let i = 0; i < arr.length - size + 1; ++i) {
      result.push(arr.slice(i, i + size) as Tuple<T, Size>);
    }

    return result;
  };

  export const count = <T>(
    arr: T[],
    fn: (value: T, index: number, values: T[]) => boolean,
  ): number => arr.filter(fn).length;

  export module N {
    export const range = (start: number, end: number, step: number = 1) =>
      Array.from(
        { length: (end - start) / step + 1 },
        (_, i) => start + i * step,
      );

    export const add = (a: number, b: number) => a + b;
    export const sum = (arr: number[]) => arr.reduce(add, 0);
    export const len = (arr: number[]): number => arr.length;
    export const mean = (arr: number[]) => sum(arr) / len(arr);

    export const asc = (a: number, b: number) => a - b;
    export const desc = (a: number, b: number) => b - a;
  }

  export module S {
    export const asc = (a: string, b: string) => a.localeCompare(b);
    export const desc = (a: string, b: string) => b.localeCompare(a);
  }


  export type Pair<T, Y = T> = [T, Y];

  export type Tuple<T, N extends number> = N extends N
    ? number extends N
      ? T[]
      : _TupleOf<T, N, []>
    : never;

  type _TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N
    ? R
    : _TupleOf<T, N, [T, ...R]>;
}
