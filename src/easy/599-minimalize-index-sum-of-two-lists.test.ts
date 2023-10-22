export {};

const findRestaurant = (l1: string[], l2: string[]): string[] => {
  const indexSum: Record<string, number> = {};
  let minSum = Number.MAX_VALUE;

  let names: string[] = [];
  for (let i = 0; i < l1.length; ++i) indexSum[l1[i]] = i;

  for (let j = 0; j < l2.length; j++) {
    if (indexSum[l2[j]] !== undefined) {
      let i = indexSum[l2[j]];
      let sum = i + j;
      if (sum < minSum) {
        minSum = sum;
        names = [l2[j]];
      } else if (sum === minSum) {
        names.push(l2[j]);
      }
    }
  }
  return names;
};

describe("Minimum index sum of two lists", () => {
  it("should pass the first case", () => {
    expect(
      findRestaurant(
        ["Shogun", "Tapioca Express", "Burger King", "KFC"],
        ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"],
      ),
    ).toEqual(["Shogun"]);
  });

  it("should pass the second case", () => {
    expect(
      findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]),
    ).toEqual(["Shogun"]);
  });

  it("should pass the third case", () => {
    expect(findRestaurant(["S", "TEXP", "BK", "KFC"], ["KFC", "BK", "S"])).toEqual(["S"]);
  });

  it("should pass the fourth case", () => {
    expect(findRestaurant(["k", "KFC"], ["k", "KFC"])).toEqual(["k"]);
  });
});
