export {};

const xorOperation = (n: number, start: number): number => {
  let result = 0;

  for (let i = 0; i < n; ++i) result ^= start + 2 * i;

  return result;
};

describe("xor op in array", () => {
  it("case 1", () => {
    expect(xorOperation(5, 0)).toBe(8);
  });

  it("case 2", () => {
    expect(xorOperation(4, 3)).toBe(8);
  });
});