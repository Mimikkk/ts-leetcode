export {};

const checkPerfectNumber = (num: number): boolean => {
  if (num <= 5) return false;

  const sqrt = Math.sqrt(num);

  let sum = 1;
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) sum += i === sqrt ? i : i + num / i;
  }
  return sum === num;
};

describe("check perfect number", () => {
  it("should return true", () => {
    expect(checkPerfectNumber(28)).toBe(true);
  });

  it("should return false", () => {
    expect(checkPerfectNumber(1)).toBe(false);
  });

  it("should return false", () => {
    expect(checkPerfectNumber(2)).toBe(false);
  });
});