export {};

const hasAlternatingBits = (n: number): boolean => {
  let prev = n & 1;

  n >>= 1;
  while (n > 0) {
    const curr = n & 1;
    if (curr === prev) return false;
    prev = curr;
    n >>= 1;
  }

  return true;
};

describe("has alternate bits", () => {
  it("case 1", () => {
    expect(hasAlternatingBits(5)).toBeTruthy();
  });

  it("case 2", () => {
    expect(hasAlternatingBits(7)).toBeFalsy();
  });

  it("case 3", () => {
    expect(hasAlternatingBits(11)).toBeFalsy();
  });
});
