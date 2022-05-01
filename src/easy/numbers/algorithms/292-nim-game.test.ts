export {};

const canWinNim = (n: number): boolean => !!(n & 3);

describe("292 - Nim Game", () => {
  it("canWinNim", () => {
    expect(canWinNim(4)).toBe(false);
    expect(canWinNim(5)).toBe(true);
    expect(canWinNim(6)).toBe(true);
    expect(canWinNim(7)).toBe(true);
    expect(canWinNim(8)).toBe(false);
  });
});