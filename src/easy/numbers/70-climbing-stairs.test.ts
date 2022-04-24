export {};

const climbStairs = (n: number): number => {
  let [a, b] = [0, 1];
  for (let i = 0; i < n; i++) [a, b] = [b, a + b];
  return b;
};

describe("70 - climbing stairs", () => {
  it("case 1", () => {
    expect(climbStairs(2)).toBe(2);
  });

  it("case 2", () => {
    expect(climbStairs(3)).toBe(3);
  });

  it("case 3", () => {
    expect(climbStairs(4)).toBe(5);
  });

  it("case 4", () => {
    expect(climbStairs(5)).toBe(8);
  });

  it("case 5", () => {
    expect(climbStairs(6)).toBe(13);
  });

  it("case 6", () => {
    expect(climbStairs(7)).toBe(21);
  });
});
