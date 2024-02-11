import { exercise } from "@shared/utilities/exercise.js";

const restoreArray = (adjacentPairs: [from: number, to: number][]): number[] => {
  let map = new Map<number, number[]>();
  for (let [a, b] of adjacentPairs) {
    if (!map.has(a)) map.set(a, []);
    if (!map.has(b)) map.set(b, []);
    map.get(a)!.push(b);
    map.get(b)!.push(a);
  }

  let start: number = undefined!;
  for (const [key, value] of map) {
    if (value.length === 1) {
      start = key;
      break;
    }
  }
  const result = [start, map.get(start)![0]];

  while (result.length < map.size) {
    const last = result[result.length - 1];
    const previous = result[result.length - 2];

    let next: number = undefined!;
    for (const n of map.get(last)!) {
      if (n !== previous) {
        next = n;
        break;
      }
    }

    result.push(next);
  }

  return result;
};

exercise(restoreArray, [
  [
    [
      [
        [2, 1],
        [3, 4],
        [3, 2],
      ],
    ],
    [1, 2, 3, 4],
  ],
  [
    [
      [
        [4, -2],
        [1, 4],
        [-3, 1],
      ],
    ],
    [-2, 4, 1, -3],
  ],
  [[[[100000, -100000]]], [100000, -100000]],
]);
