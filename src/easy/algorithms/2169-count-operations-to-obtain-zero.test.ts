export {};

const countOperations = (n1: number, n2: number, count: number = -1): number => {
  while ((count++, n1 && n2)) n1 >= n2 ?n1 -= n2:n2 -= n1;
  return count;
};

describe("count operations to obtain zero", () => {
  it("case 1", () => {
    expect(countOperations(2, 3)).toBe(3);
  });

  it("case 2", () => {
    expect(countOperations(10, 10)).toBe(1);
  });
});
