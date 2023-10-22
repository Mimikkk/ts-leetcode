export {};

const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const numWaterBottles = (bottles: number, rate: number): number => {
  let result = bottles;

  while (bottles >= rate) {
    const [drinks, empty] = divmod(bottles, rate);
    result += drinks;
    bottles = drinks + empty;
  }

  return result;
};

describe("water bottles", () => {
  it("case 1", () => {
    expect(numWaterBottles(9, 3)).toBe(13);
  });

  it("case 2", () => {
    expect(numWaterBottles(15, 4)).toBe(19);
  });

  it("case 3", () => {
    expect(numWaterBottles(99, 4)).toBe(131);
  });
});
