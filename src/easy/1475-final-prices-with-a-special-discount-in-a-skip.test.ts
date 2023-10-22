export {};

const isAsCheap = (first: number, second: number) => first <= second;
const finalPrices = (prices: number[]): number[] => {
  const result = [];

  prices:
    for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        if (isAsCheap(prices[j], prices[i])) {
          result.push(prices[i] - prices[j]);
          continue prices;
        }
      }

      result.push(prices[i]);
    }

  return result;
};

describe("final prices", () => {
  it("case 1", () => {
    expect(finalPrices([8, 4, 6, 2, 3])).toEqual([4, 2, 4, 2, 3]);
  });

  it("case 2", () => {
    expect(finalPrices([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("case 3", () => {
    expect(finalPrices([8, 7, 4, 2, 8, 1, 7, 7, 10, 1])).toEqual([1, 3, 2, 1, 7, 0, 0, 6, 9, 1]);
  });

  it("case 4", () => {
    expect(finalPrices([4, 7, 1, 9, 4, 8, 8, 9, 4])).toEqual([3, 6, 1, 5, 0, 0, 4, 5, 4]);
  });
});
