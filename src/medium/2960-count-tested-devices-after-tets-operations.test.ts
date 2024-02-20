import { exercise } from "@shared/utilities/exercise.js";

const countTestedDevices = (batteryPercentages: number[]): number => {
  const n = batteryPercentages.length;

  let count = 0;
  for (let i = 0; i < n; ++i) {
    if (batteryPercentages[i] <= 0) continue;

    for (let j = i + 1; j < n; ++j) {
      if (batteryPercentages[j] <= 0) continue;
      batteryPercentages[j] = batteryPercentages[j] - 1;
    }

    ++count;
  }

  return count;
};

exercise(countTestedDevices, [
  [[[1, 1, 2, 1, 3]], 3],
  [[[3, 1, 2]], 2],
]);
