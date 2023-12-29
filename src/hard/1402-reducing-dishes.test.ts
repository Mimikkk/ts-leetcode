import { exercise } from "@shared/utilities/exercise.js";

const maxSatisfaction = (satisfaction: number[]): number => {
  satisfaction.sort((a, b) => a - b);
  const n = satisfaction.length;

  let maxSum = 0;
  for (let i = 0; i < n; ++i) {
    let level = 0;
    let sum = 0;
    for (let j = i; j < n; ++j) sum += satisfaction[j] * ++level;

    if (sum > maxSum) maxSum = sum;
  }

  return maxSum;
};

exercise(maxSatisfaction, [
  [[[4, 3, 2]], 20],
  [[[-1, -8, 0, 5, -9]], 14],
  [[[-1, -4, -5]], 0],
  [[[0]], 0],
]);
