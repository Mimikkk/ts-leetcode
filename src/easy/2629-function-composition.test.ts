import { exercise } from "@shared/utilities/exercise.ts";

type Fn<T, Y> = (x: T) => Y;

const compose = <T>(fns: Fn<T, T>[]): Fn<T, T> => {
  if (fns.length === 0) return (x) => x;

  return (a0) => {
    let value = fns[fns.length - 1](a0);
    for (let i = fns.length - 2; i >= 0; --i) value = fns[i](value);
    return value;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

exercise(
  (value: number) => {
    const f = (x: number) => x + 1;
    const g = (y: number) => y + 1;
    const h = (z: number) => z + 1;

    return compose([f, g, h])(value);
  },
  [
    [[1], 4],
    [[2], 5],
  ],
);
