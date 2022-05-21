export {};

const map =
  Object.fromEntries([..."abcdefghijklmnopqrstuvwxyz"]
    .map((char, i) => [`${i + 1}${(i > 8 ?"#":"")}`, char]));

const freqAlphabets = (s: string): string =>
  s.replace(/\d{2}#|\d/g, (x) => map[x]);

describe("freq alphabets", () => {
  it("case 1", () => {
    expect(freqAlphabets("10#11#12")).toBe("jkab");
  });

  it("case 2", () => {
    expect(freqAlphabets("1326#")).toBe("acz");
  });
});
