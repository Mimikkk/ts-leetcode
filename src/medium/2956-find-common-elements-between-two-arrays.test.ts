import { exercise } from "@shared/utilities/exercise.ts";

const findIntersectionValues = (nums1: number[], nums2: number[]): [number, number] => [
  nums1.filter((element) => nums2.includes(element)).length,
  nums2.filter((element) => nums1.includes(element)).length,
];

exercise(findIntersectionValues, [
  [
    [
      [1, 2, 2, 1],
      [2, 2],
    ],
    [2, 2],
  ],
]);
