import { exercise } from "@shared/utilities/exercise";

const { max, log10 } = Math;
const accountBalanceAfterPurchase = (unitPrice: number): number => {
  const balance = 100;

  console.log(~~(balance / unitPrice));

  return balance;
};

exercise(accountBalanceAfterPurchase, [
  [[9], 90],
  [[15], 80],
  [[100], 80],
]);
