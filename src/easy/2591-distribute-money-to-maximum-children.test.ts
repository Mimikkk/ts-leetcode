import { exercise } from "@shared/utilities/exercise";

const distMoney = (money: number, children: number): number => {
  if (money < children) return -1;

  money -= children;
  let count = Math.min(children, ~~(money / 7));
  money -= count * 7;

  if ((count === children - 1 && money === 3) || (count === children && money)) --count;

  return count;
};
exercise(distMoney, [
  [[20, 3], 1],
  [[16, 2], 2],
  [[8, 2], 0],
  [[8, 1], 1],
  [[9, 2], 1],
  [[12, 2], 0],
  [[24, 3], 3],
  [[28, 4], 2], // 8 8 9 3
]);
