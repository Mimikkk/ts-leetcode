export {};

const isUgly = (n: number): boolean => {
  if (n <= 0) return false;
  while (n % 2 === 0) n /= 2;
  while (n % 3 === 0) n /= 3;
  while (n % 5 === 0) n /= 5;
  return n === 1;
};

describe("263 - ugly number", () => {
  it("is ugly", () => {
    expect(isUgly(6)).toBe(true);
  });

  it("is not ugly", () => {
    expect(isUgly(14)).toBe(false);
  });

  it("is ugly", () => {
    expect(isUgly(1)).toBe(true);
  });

  it("is not ugly", () => {
    expect(isUgly(8)).toBe(true);
  });
});