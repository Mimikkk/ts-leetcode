export {};

const minBitFlips = (start: number, goal: number): number => {
  let orVal = start ^ goal;

  let cnt = 0;
  while (orVal) {
    orVal &= orVal - 1;
    ++cnt;
  }

  return cnt;
};

describe("min bit flips", () => {
  it("should return the minimum number of bit flips", () => {
    expect(minBitFlips(0b1010, 0b0111)).toBe(3);
    expect(minBitFlips(0b0011, 0b0100)).toBe(3);
  });
});
