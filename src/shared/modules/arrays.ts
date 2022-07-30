export {};

module A {
  export const first = <T, Y = undefined>(arr: T[], or?: Y): T | Y =>
    (arr[0] === undefined ? or : arr[0])!;

  export const last = <T, Y = undefined>(arr: T[], or?: Y): T | Y =>
    (arr.at(-1) === undefined ? or : arr.at(-1))!;

  export const sorted = <T>(arr: T[], fn: (a: T, b: T) => number) =>
    [...arr].sort(fn);

  export module N {
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
}
