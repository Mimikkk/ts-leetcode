export {};

const range = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, i) => i + start);
const sumZero = (n: number): number[] => {
  const middle = Math.floor(n / 2);

  return range(-middle, middle).filter((x) => n % 2 === 1 || x !== 0);
};

describe("sum to zero", () => {
  it("range(-5,-1)", () => {
    expect(range(-5, -1)).toEqual([-5, -4, -3, -2, -1]);
  });

  it("case 1", () => {
    expect(sumZero(3)).toEqual([-1, 0, 1]);
  });

  it("case 2", () => {
    expect(sumZero(5)).toEqual([-2, -1, 0, 1, 2]);
  });

  it("case 3", () => {
    expect(sumZero(10)).toEqual([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]);
  });

  it("case 4", () => {
    expect(sumZero(1)).toEqual([0]);
  });
});
