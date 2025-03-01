import { N as Num } from "./numbers.ts";
export namespace A {
  export const first = <T, Y = undefined>(arr: T[], or?: Y): T | Y => (arr[0] === undefined ? or : arr[0])!;

  export const second = <T, Y = undefined>(arr: T[], or?: Y): T | Y => arr[1] ?? or!;

  export const last = <T, Y = undefined>(arr: T[], or?: Y): T | Y => (arr.at(-1) === undefined ? or : arr.at(-1))!;

  export const sorted = <T>(arr: T[], fn: (a: T, b: T) => number) => copy(arr).sort(fn);

  export const reversed = <T>(arr: T[]) => copy(arr).reverse();

  export const enumerate = <T>(arr: T[], start: number = 0) => arr.map((x, i) => [x, i + start] as [T, number]);

  export const unique = <T>(arr: T[]) => [...new Set(arr)];

  export const compact = <T>(arr: T[]): Exclude<T, undefined | null>[] => arr.filter(Boolean) as any[];

  export const copy = <T>(arr: T[]) => [...arr];

  export const pairs = <T>(arr: T[]): Pair<[T, number]>[] => {
    const result: Pair<[T, number]>[] = [];

    for (let i = 0; i < arr.length; ++i) {
      for (let j = i + 1; j < arr.length; ++j) {
        result.push([
          [arr[i], i],
          [arr[j], j],
        ]);
      }
    }

    return result;
  };

  export const zip = <T, Y = T>(a: T[], b: Y[]): [T, Y][] =>
    b.length < a.length ? b.map((x, i) => [a[i], x]) : a.map((x, i) => [x, b[i]]);

  export const zipLongest = <T, Y = T>(a: T[], b: Y[]): [T | undefined, Y | undefined][] =>
    b.length > a.length ? b.map((x, i) => [a[i], x]) : a.map((x, i) => [x, b[i]]);

  export const interweave = <T, Y = T>(a: T[], b: Y[]): (T | Y)[] => compact(zipLongest(a, b).flat());

  export const windows = <Size extends number, T>(arr: T[], size: Size): Tuple<T, Size>[] => {
    const result: Tuple<T, Size>[] = [];

    for (let i = 0; i < arr.length - size + 1; ++i) {
      result.push(arr.slice(i, i + size) as Tuple<T, Size>);
    }

    return result;
  };

  export const count = <T>(arr: T[], fn: (value: T, index: number, values: T[]) => boolean): number =>
    arr.filter(fn).length;

  export const create = <T>(count: number, fn: (index: number) => T) => Array.from({ length: count }, (_, i) => fn(i));

  export const subarrays = <T>(arr: T[]): T[][] => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        result.push(arr.slice(i, j + 1));
      }
    }

    return result;
  };

  export const union = <T>(arr: T[], ...others: T[][]) => [...arr, ...others.flat()];

  export const intersection = <T>(...arrays: T[][]) => {
    const [first, ...others] = arrays;
    const sets = others.map((others) => new Set(others));

    return first.filter((x) => sets.every((s) => s.has(x)));
  };

  export namespace N {
    export const range = (start: number, end: number, step: number = 1) =>
      Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);

    export const sum = (arr: number[]) => arr.reduce(Num.add, 0);
    export const len = (arr: number[]): number => arr.length;
    export const mean = (arr: number[]) => sum(arr) / len(arr);

    export const asc = (a: number, b: number) => a - b;
    export const desc = (a: number, b: number) => b - a;
  }

  export namespace S {
    export const asc = (a: string, b: string) => a.localeCompare(b);
    export const desc = (a: string, b: string) => b.localeCompare(a);
  }

  export type Pair<T, Y = T> = [T, Y];

  export type Tuple<T, N extends number> = N extends N ? (number extends N ? T[] : _TupleOf<T, N, []>) : never;

  type _TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N ? R : _TupleOf<T, N, [T, ...R]>;
}
