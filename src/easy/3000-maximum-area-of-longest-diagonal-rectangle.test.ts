import { exercise } from "@shared/utilities/exercise.js";

type RectangleDescriptor = [width: number, height: number];
const areaOfMaxDiagonal = (descriptors: RectangleDescriptor[]): number => {
  let maxArea = 0;
  let longestDiagonal = 0;

  for (const [width, height] of descriptors) {
    const area = width * height;
    const diagonal = Math.sqrt(width ** 2 + height ** 2);

    if (diagonal > longestDiagonal || (diagonal === longestDiagonal && area > maxArea)) {
      maxArea = area;
      longestDiagonal = diagonal;
    }
  }

  return maxArea;
};

exercise(areaOfMaxDiagonal, [
  [
    [
      [
        [9, 3],
        [8, 6],
      ],
    ],
    48,
  ],
  [
    [
      [
        [3, 4],
        [4, 3],
      ],
    ],
    12,
  ],
]);
