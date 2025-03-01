import { exercise } from "@shared/utilities/exercise.ts";

const earliestFullBloom = (plantTime: number[], growTime: number[]): number => {
  const times = Array.from(plantTime, (plant, i) => [plant, growTime[i]]).sort(([, a], [, b]) => b - a);

  let min = 0;
  let passedDays = 0;
  for (const [plant, grow] of times) {
    passedDays += plant;
    const value = grow + passedDays;
    if (value > min) min = value;
  }

  return min;
};

exercise(earliestFullBloom, [
  [
    [
      [1, 4, 3],
      [2, 3, 1],
    ],
    9,
  ],
  [
    [
      [1, 2, 3, 2],
      [2, 1, 2, 1],
    ],
    9,
  ],
  [[[1], [1]], 2],
  [
    [
      [1232, 312, 312, 312, 412, 4, 124, 124, 124, 12, 421, 4, 124, 1242, 14, 12, 4, 1235, 124],
      [124, 12, 412, 4, 124, 124, 12, 412, 4, 124, 124, 12, 412, 4, 124, 124, 12, 4, 5235],
    ],
    6152,
  ],
]);
