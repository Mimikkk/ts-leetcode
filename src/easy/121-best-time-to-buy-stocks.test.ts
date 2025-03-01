import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const maxProfit = (prices: number[]): number => {
  if (prices.length < 2) return 0;
  let [min, max] = [prices[0], 0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min < 0) min = prices[i];
    else if (prices[i] - min - max > 0) max = prices[i] - min;
  }

  return max;
};

describe("121 - best time to buy stocks", () => {
  it("#1", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
  });

  it("#2", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  });

  it("#3", () => {
    expect(maxProfit([])).toEqual(0);
  });
});
