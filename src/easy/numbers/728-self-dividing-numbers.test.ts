export {};

const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const range = (start: number, end: number) =>
  Array.from({ length:end - start }, (_, i) => i + start);

const isSelfDividing = (n: number) => {
  let original = n;

  let mod;
  while (n) {
    [n, mod] = divmod(n, 10);
    if (original % mod !== 0) return false;
  }
  return true;
};

const selfDividingNumbers = (left: number, right: number) =>
  range(left, right + 1).filter(isSelfDividing);

describe("self dividing numbers", () => {
  it("case 1", () => {
    expect(selfDividingNumbers(1, 22)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
  });

  it("case 2", () => {
    expect(selfDividingNumbers(47, 85)).toEqual([48, 55, 66, 77]);
  });

  it("self dividing 128", () => {
    expect(isSelfDividing(128)).toEqual(true);
  });

  it("self dividing 128", () => {
    expect(isSelfDividing(127)).toEqual(false);
  });
});