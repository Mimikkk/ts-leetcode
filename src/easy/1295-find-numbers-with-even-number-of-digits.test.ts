export {};

const findNumbers = (nums: number[]) =>
  nums
    .map(Math.log10)
    .map(Math.floor)
    .filter((n) => n % 2 === 1).length;

describe("count even digit numbers", () => {
  it("case 1", () => {
    expect(findNumbers([12, 345, 2, 6, 7896])).toEqual(2);
  });

  it("case 2", () => {
    expect(findNumbers([555, 901, 482, 1771])).toEqual(1);
  });

  it("case 3", () => {
    expect(findNumbers([10, 1000, 100000])).toEqual(3);
  });
});
