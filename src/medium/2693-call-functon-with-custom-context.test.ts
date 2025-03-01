import { exercise } from "@shared/utilities/exercise.ts";
const callPolyfill = function <This extends (...args: any) => any>(
  this: This,
  context: unknown,
  ...args: Parameters<This>
): ReturnType<This> {
  return this.call(context, ...args);
};

exercise(
  (a) =>
    callPolyfill.bind(function (this: { a: number }, a) {
      return this.a + a;
    })(a, 4),
  [[[{ a: 1, b: 2 }], 5]],
);
