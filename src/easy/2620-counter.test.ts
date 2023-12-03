import { exercise } from "@shared/utilities/exercise.js";

const createCounter =
  (n: number): (() => number) =>
  () =>
    n++;

const handleCounter = (init: number, calls: "call"[]): number[] => calls.map(createCounter(init));

exercise(handleCounter, [
  [
    [5, ["call", "call", "call"]],
    [5, 6, 7],
  ],
]);
