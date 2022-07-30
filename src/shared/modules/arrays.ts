export {};

module A {
  export const add = (a: number, b: number) => a + b;
  export const sum = (arr: number[]) => arr.reduce(add, 0);
  export const len = (arr: number[]): number => arr.length;
  export const mean = (arr: number[]) => sum(arr) / len(arr);

  export const sorted = (
    arr: number[],
    fn: (a: number, b: number) => number = S.asc,
  ) => [...arr].sort(fn);

  export module S {
    export const asc = (a: number, b: number) => a - b;
    export const desc = (a: number, b: number) => b - a;
  }
}
