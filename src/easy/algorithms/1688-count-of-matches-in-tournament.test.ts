export {};

const numberOfMatches = (n: number): number => n - 1;

describe("number of matches", () => {
  it("case 1", () => {
    expect(numberOfMatches(7)).toBe(6);
  });

  it("case 2", () => {
    expect(numberOfMatches(14)).toBe(13);
  });
});
