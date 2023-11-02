import { exercise } from "@shared/utilities/exercise";

const mergeArrays = (nums1: [number, number][], nums2: [number, number][]): [number, number][] => {
  const map = new Map<number, number>();

  for (const [num, count] of nums1) {
    map.set(num, (map.get(num) ?? 0) + count);
  }

  for (const [num, count] of nums2) {
    map.set(num, (map.get(num) ?? 0) + count);
  }

  return [...map.entries()].sort(([a], [b]) => a - b);
};

//@ts-expect-error
exercise(mergeArrays, [
  [
    [
      [
        [1, 2],
        [2, 3],
        [4, 5],
      ],
      [
        [1, 4],
        [3, 2],
        [4, 1],
      ],
    ],
    [
      [1, 6],
      [2, 3],
      [3, 2],
      [4, 6],
    ],
  ],
  [
    [
      [
        [2, 4],
        [3, 6],
        [5, 5],
      ],
      [
        [1, 3],
        [4, 3],
      ],
    ],
    [
      [1, 3],
      [2, 4],
      [3, 6],
      [4, 3],
      [5, 5],
    ],
  ],
]);
