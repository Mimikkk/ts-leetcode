export {};

const countBits = (n: number) => {
  let count = 0;

  while (n > 0) {
    count += n & 1;
    n >>= 1;
  }

  return count;
};

const hammingDistance = (x: number, y: number): number => countBits(x ^ y);

describe("Hamming Distance", () => {
  it("hamming 1", () => {
    expect(hammingDistance(1, 4)).toEqual(2);
  });

  it("hamming 3", () => {
    expect(hammingDistance(1, 3)).toEqual(1);
  });
});
