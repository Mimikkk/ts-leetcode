import { exercise } from "@shared/utilities/exercise.ts";

const wateringPlants = (thirst: number[], capacity: number): number => {
  let steps = thirst.length;
  let water = capacity;

  for (let i = 0; i < thirst.length; i++) {
    if (water < thirst[i]) {
      steps += 2 * i;
      water = capacity;
    }

    water -= thirst[i];
  }

  return steps;
};

exercise(wateringPlants, [
  [[[2, 2, 3, 3], 5], 14],
  [[[1, 1, 1, 4, 2, 3], 4], 30],
  [[[7, 7, 7, 7, 7, 7, 7], 8], 49],
]);
