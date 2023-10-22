export {};

const binaryGap = (n: number) => {
  let [last, result] = [-1, 0];

  let i = 0;
  while (n > 0) {
    if (n & 1) {
      if (last >= 0) result = Math.max(result, i - last);
      last = i;
    }
    n >>= 1;
    ++i;
  }

  return result;
};

describe("binary gap", () => {
  it("case 1", () => {
    expect(binaryGap(8)).toEqual(0);
  });

  it("case 2", () => {
    expect(binaryGap(5)).toEqual(2);
  });
});
