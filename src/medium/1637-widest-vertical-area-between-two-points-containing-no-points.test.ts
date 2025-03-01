import { exercise } from "@shared/utilities/exercise.ts";

const maxWidthOfVerticalArea = (points: [number, number][]): number => {
  const xs = [...new Set(points.map(([x]) => x).sort((a, b) => a - b))];

  let longest = 0;
  for (let i = 1; i < xs.length; ++i) {
    const length = xs[i] - xs[i - 1];
    if (length > longest) longest = length;
  }

  return longest;
};

exercise(maxWidthOfVerticalArea, [
  [
    [
      [
        [8, 7],
        [9, 9],
        [7, 4],
        [9, 7],
      ],
    ],
    1,
  ],
  [
    [
      [
        [3, 1],
        [9, 0],
        [1, 0],
        [1, 4],
        [5, 3],
        [8, 8],
      ],
    ],
    3,
  ],
]);
