import { exercise } from "@shared/utilities/exercise.ts";

const maxCoins = (piles: number[]): number => {
  piles.sort((a, b) => a - b);

  let maxSecond = 0;
  for (let i = piles.length - 2; i >= piles.length / 3; i -= 2) maxSecond += piles[i];
  return maxSecond;
};

exercise(maxCoins, [
  [[[2, 4, 1, 2, 7, 8]], 9],
  [[[2, 4, 5]], 4],
  [[[9, 8, 7, 6, 5, 1, 2, 3, 4]], 18],
]);
