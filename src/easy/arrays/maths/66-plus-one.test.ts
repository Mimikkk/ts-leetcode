export {};

const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const plusOne = (digits: number[]): number[] => {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0 && carry; i--) {
    [carry, digits[i]] = divmod(digits[i] + carry, 10);
  }

  if (carry > 0) digits.unshift(carry);

  return digits;
};

describe("66 - plus one", () => {
  it("should return [1, 2, 4] for [1, 2, 3]", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  it("should return [1, 3, 0] for [1, 2, 9]", () => {
    expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
  });

  it("should return [1, 0, 0, 0] for [9, 9, 9]", () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });

  it("should return [1, 0, 0, 0, 0] for [9, 9, 9, 9]", () => {
    expect(plusOne([9, 9, 9, 9])).toEqual([1, 0, 0, 0, 0]);
  });

  it("should return [1, 0] for [9]", () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });
});
