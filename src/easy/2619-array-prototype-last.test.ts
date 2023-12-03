import { exercise } from "@shared/utilities/exercise.js";

// declare global {
//   interface Array<T> {
//     last(): T | -1;
//   }
// }

//@ts-ignore
Array.prototype.last = function () {
  return this.length ? this[this.length - 1] : -1;
};

exercise(
  //@ts-ignore
  <T>(list: T[]) => list.last(),
  [
    [[[1, 2, 3]], 3],
    [[[1]], 1],
    [[[]], -1],
  ],
);
