export {};

const reverseBits = (n: number): number => {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    result |= (n & 1) << (31 - i);
    n >>>= 1;
  }

  return result >>> 0;
};

describe("190 - reverse bits", () => {
  test("Case 1", () => {
    expect(reverseBits(43261596)).toEqual(964176192);
  });

  test("Case 2", () => {
    expect(reverseBits(4294967293)).toEqual(3221225471);
  });

  test("Case 3", () => {
    expect(reverseBits(0)).toEqual(0);
  });

  test("Case 4", () => {
    expect(reverseBits(1)).toEqual(2147483648);
  });
});
