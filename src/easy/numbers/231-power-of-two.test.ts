const isPowerOfTwo = (n: number): boolean => n > 0 && !(n & n - 1);

describe("231 - power of two", () => {
  it("231. Power of Two", () => {
    expect(isPowerOfTwo(1)).toBe(true);
    expect(isPowerOfTwo(16)).toBe(true);
    expect(isPowerOfTwo(218)).toBe(false);
  });
});
