import { exercise } from "@shared/utilities/exercise.js";

const accountBalanceAfterPurchase = (unitsPurchased: number): number => 100 - 10 * Math.round(unitsPurchased / 10);

exercise(accountBalanceAfterPurchase, [
  [[9], 90],
  [[15], 80],
]);
