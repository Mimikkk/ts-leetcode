export {};

const countTriples = (n: number): number => {
  let result = 0;

  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= n; ++j) {
      const c = Math.sqrt(i * i + j * j);
      if (c % 1 === 0 && c <= n) ++result;
    }
  }
  return result;
};

describe("count triplets", () => {
  it("case 1", () => {
    expect(countTriples(5)).toBe(2);
  });
  it("case 2", () => {
    expect(countTriples(10)).toBe(4);
  });
  it("case 3", () => {
    expect(countTriples(12)).toBe(4);
  });
  it("case 4", () => {
    expect(countTriples(13)).toBe(6);
  });
});