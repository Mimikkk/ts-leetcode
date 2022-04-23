export {};

const mySqrt = (x: number): number => {
  let left = 1;
  let right = x;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left - 1;
};

describe("69 - sqrt(x)", () => {
  it("1 should be 1", () => {
    expect(mySqrt(1)).toBe(1);
  });

  it("2 should be 1", () => {
    expect(mySqrt(2)).toBe(1);
  });

  it("3 should be 1", () => {
    expect(mySqrt(3)).toBe(1);
  });

  it("4 should be 2", () => {
    expect(mySqrt(4)).toBe(2);
  });

  it("5 should be 2", () => {
    expect(mySqrt(5)).toBe(2);
  });

  it("6 should be 2", () => {
    expect(mySqrt(6)).toBe(2);
  });

  it("7 should be 2", () => {
    expect(mySqrt(7)).toBe(2);
  });

  it("8 should be 2", () => {
    expect(mySqrt(8)).toBe(2);
  });

  it("9 should be 3", () => {
    expect(mySqrt(9)).toBe(3);
  });
});
