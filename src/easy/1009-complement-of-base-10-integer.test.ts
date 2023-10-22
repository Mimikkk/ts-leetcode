export {};

const bitwiseComplement = (n: number) =>
  n == 0 ? 1 : (2 ** (Math.floor(Math.log2(n)) + 1) - 1) - n;

describe("bitwise complement", () => {
  it("case 1", () => {
    expect(bitwiseComplement(5)).toEqual(2);
  });

  it("case 2", () => {
    expect(bitwiseComplement(7)).toEqual(0);
  });

  it("case 3", () => {
    expect(bitwiseComplement(10)).toEqual(5);
  });
});
