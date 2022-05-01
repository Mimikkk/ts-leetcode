const symbols: Record<string, number> = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };

export const romanToInt = (s: string): number =>
  [...s].reduce((sum, n, i) => sum + symbols[n] * (symbols[s[i + 1]] > symbols[n] ?-1:1), 0);

describe("13 - roman to int", () => {
  it("1 - should return 3 when input is III", () => {
    expect(romanToInt("III")).toBe(3);
  });

  it("2 - should return 4 when input is IV", () => {
    expect(romanToInt("IV")).toBe(4);
  });

  it("3 - should return 9 when input is IX", () => {
    expect(romanToInt("IX")).toBe(9);
  });

  it("4 - should return 58 when input is LVIII", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  it("5 - should return 1994 when input is MCMXCIV", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });

  it("6 - should return 3999 when input is MMMCMXCIX", () => {
    expect(romanToInt("MMMCMXCIX")).toBe(3999);
  });
});
