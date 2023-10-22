export {};

const detectCapitalUse = (word: string) => {
  const allCapital = word.toUpperCase() === word;
  const allLower = word.toLowerCase() === word;
  const firstCapitalOnly = word[0].toUpperCase() === word[0] && word.slice(1).toLowerCase() === word.slice(1);

  return allCapital || firstCapitalOnly || allLower;
};

describe("detect capitalization", () => {
  it("usa", () => {
    expect(detectCapitalUse("USA")).toBe(true);
  });

  it("Usa", () => {
    expect(detectCapitalUse("Usa")).toBe(true);
  });

  it("usa", () => {
    expect(detectCapitalUse("usa")).toBe(true);
  });

  it("Usa", () => {
    expect(detectCapitalUse("UsA")).toBe(false);
  });
});