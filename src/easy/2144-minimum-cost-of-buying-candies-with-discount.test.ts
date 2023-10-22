export {};

const desc = (a: number, b: number) => b - a;
const minimumCost = (candies: number[]): number => {
  candies.sort(desc);

  let cost = 0;
  for (let i = 0; i < candies.length; i++) {
    cost += candies[i];
    if (i % 3 === 1) i += 1;
  }

  return cost;
};

describe("minimum cost of candies", () => {
  it("case 1", () => {
    expect(minimumCost([1, 2, 3])).toEqual(5);
  });

  it("case 2", () => {
    expect(minimumCost([9, 7, 6, 5, 2, 2])).toEqual(23);
  });

  it("case 3", () => {
    expect(minimumCost([5, 5])).toEqual(10);
  });
});