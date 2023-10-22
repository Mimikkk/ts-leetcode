export {};

const generateTheString = (n: number) =>
  n % 2 ?"a".repeat(n):"a".repeat(n - 1).concat("b");

describe("generate odd strings", () => {
  it("case 1", () => {
    expect(generateTheString(4)).toBe("aaab");
  });
});