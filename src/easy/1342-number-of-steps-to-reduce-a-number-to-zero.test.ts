export {};

const numberOfSteps = (n: number, count: number = -1): number => {
  while ((count++, n > 0)) n & 1 ?n--:n /= 2;
  return count;
};

describe("number of steps", () => {
  it("case 1", () => {
    expect(numberOfSteps(14)).toBe(6);
  });

  it("case 2", () => {
    expect(numberOfSteps(8)).toBe(4);
  });

  it("case 3", () => {
    expect(numberOfSteps(123)).toBe(12);
  });
});
