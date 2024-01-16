import { exercise } from "@shared/utilities/exercise.js";

function groupBy<T>(this: T[], fn: (item: T) => string): Record<string, T[]> {
  let result: Record<string, T[]> = {};
  for (const item of this) {
    const key = fn(item);
    if (result[key] === undefined) result[key] = [];
    result[key].push(item);
  }
  return result;
}

type Item = { id: string };
exercise(
  (ar: Item[]) => groupBy.call(ar, (item) => (item as Item).id),
  [
    [
      [[{ id: "1" }, { id: "1" }, { id: "2" }]],
      {
        "1": [{ id: "1" }, { id: "1" }],
        "2": [{ id: "2" }],
      },
    ],
  ],
);
