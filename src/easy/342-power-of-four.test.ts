export {};

const isPowerOfFour = (n: number): boolean => n > 0 && (n & (n - 1)) == 0 && (n - 1) % 3 == 0;

describe("342 - power of four", () => {
  it("should return true", () => {
    expect(isPowerOfFour(16)).toBeTruthy();
  });

  it("should return false", () => {
    expect(isPowerOfFour(5)).toBeFalsy();
  });

  it("should return false", () => {
    expect(isPowerOfFour(0)).toBeFalsy();
  });

  it("should return false", () => {
    expect(isPowerOfFour(2)).toBeFalsy();
  });

  it("should return false", () => {
    expect(isPowerOfFour(3)).toBeFalsy();
  });

  it("should return false", () => {
    expect(isPowerOfFour(4)).toBeTruthy();
  });
});
