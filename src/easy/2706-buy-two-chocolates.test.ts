import { exercise } from "@shared/utilities/exercise.js";

const buyChoco = (prices: number[], money: number): number => {
  const [first, second] = prices.sort((a, b) => a - b);
  const price = first + second;

  return price > money ? money : money - price;
};

exercise(buyChoco, [
  [[[1, 2, 2], 3], 0],
  [[[3, 2, 3], 3], 3],
]);
