export {};

const findComplement = (num: number): number => {
  let mask = ~0;
  while (mask & num) mask <<= 1;
  return ~mask & ~num;
};

describe("find complement", () => {
  it("should pass the first test", () => {
    expect(findComplement(5)).toBe(2);
  });

  it("should pass the second test", () => {
    expect(findComplement(1)).toBe(0);
  });


  it("should pass the fourth test", () => {
    expect(findComplement(2147483647)).toBe(0);
  });
});