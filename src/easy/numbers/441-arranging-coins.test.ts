export {};

const arrangeCoins = (n: number) => Math.floor(-0.5 + Math.sqrt(2 * n + 0.25));

describe("arrange coins", () => {
  it("place 1 coin in the middle", () => {
    expect(arrangeCoins(1)).toEqual(1);
  });

  it("place 2 coins in the middle", () => {
    expect(arrangeCoins(2)).toEqual(1);
  });

  it("place 3 coins in the middle", () => {
    expect(arrangeCoins(3)).toEqual(2);
  });

  it("place 4 coins in the middle", () => {
    expect(arrangeCoins(4)).toEqual(2);
  });

  it("place 5 coins in the middle", () => {
    expect(arrangeCoins(5)).toEqual(2);
  });

  it("place 8 coins in the middle", () => {
    expect(arrangeCoins(8)).toEqual(3);
  });
});