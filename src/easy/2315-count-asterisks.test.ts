export {};

const countAsterisks = (s: string) => s.replace(/[^|*]/g, "").replace(/\|.*?\|/g, "").length;

describe("count asterisks", () => {
  it("case 1", () => {
    expect(countAsterisks("|*|*||")).toEqual(1);
  });
});