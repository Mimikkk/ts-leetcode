import { exercise } from "@shared/utilities/exercise.js";

const minNumber = (nums1: number[], nums2: number[]): number => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const common = nums1.find((x) => nums2.includes(x));
  if (common) return common;

  return Math.min(10 * nums1[0] + nums2[0], nums1[0] + 10 * nums2[0]);
};

exercise(minNumber, [
  [
    [
      [4, 1, 3],
      [5, 7],
    ],
    15,
  ],
  [
    [
      [3, 5, 2, 6],
      [3, 1, 7],
    ],
    3,
  ],
  [
    [
      [7, 5, 6],
      [1, 2, 3],
    ],
    15,
  ],
]);
