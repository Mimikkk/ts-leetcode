import { exercise } from "@shared/utilities/exercise.ts";

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn<T extends JSONValue> = (value: T) => number;

const sortBy = <T extends JSONValue>(arr: T[], fn: Fn<T>): T[] => arr.sort((a, b) => fn(a) - fn(b));

exercise(sortBy, [
  [
    [[5, 4, 1, 2, 3], (x) => x as number],
    [1, 2, 3, 4, 5],
  ],
]);
