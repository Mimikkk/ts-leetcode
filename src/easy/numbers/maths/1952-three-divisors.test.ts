export {};

const isThree = (n: number): boolean => {
  let c = 0;
  for (let i = 1; i <= n; ++i) if (!(n % i)) ++c;
  return c === 3;
};
"".replace(/\./g, "");
describe("isThree", () => {
  it("case 1", () => {
    expect(isThree(3)).toBe(false);
  });

  it("case 2", () => {
    expect(isThree(4)).toBe(true);
  });

  it("case 3", () => {
    expect(isThree(6)).toBe(false);
  });
});
