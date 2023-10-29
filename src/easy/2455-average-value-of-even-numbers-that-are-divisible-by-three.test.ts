import { exercise } from "@shared/utilities/exercise";
export {};

const averageValue = (nums: number[]): number => {
  let values = 0;
  let count = 0;

  for (const num of nums) {
    if (num % 6 === 0) {
      values += num;
      count += 1;
    }
  }

  return count ? Math.floor(values / count) : 0;
};

exercise(averageValue, [
  {
    input: [[1, 3, 6, 10, 12, 15]],
    output: 9,
  },
  {
    input: [[1, 2, 4, 7, 10]],
    output: 0,
  },
  {
    input: [
      [
        94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79, 25, 89, 55, 67, 84, 3, 79, 38, 16, 44, 2, 54, 58, 94,
        69, 71, 14, 24, 13, 21,
      ],
    ],
    output: 61,
  },
]);
