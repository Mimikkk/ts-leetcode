export {};

const tribonacci = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  let [a, b, c] = [0, 1, 1];
  for (let i = 3; i <= n; i++) [a, b, c] = [b, c, a + b + c];

  return c;
};

describe("tribonacci", () => {
  it("case 1", () => {
    expect(tribonacci(4)).toEqual(4);
  });

  it("case 2", () => {
    expect(tribonacci(1)).toEqual(0);
  });

  it("case 3", () => {
    expect(tribonacci(2)).toEqual(1);
  });

  it("case 4", () => {
    expect(tribonacci(3)).toEqual(2);
  });

  it("case 5", () => {
    expect(tribonacci(25)).toEqual(1389537);
  });
});