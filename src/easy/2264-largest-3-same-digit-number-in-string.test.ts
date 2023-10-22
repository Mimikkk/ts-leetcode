export {};

const largestGoodInteger = (num: string) => {
  let max = undefined;

  for (let i = 0; i < num.length - 2; ++i) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2] && (max === undefined || +num.substring(i, i + 3) > +max))
      max = num.substring(i, i + 3);
  }

  return max ?? "";
};

describe("largest 3 same digit num", () => {
  it("case 1", () => {
    expect(largestGoodInteger("123")).toBe("");
    expect(largestGoodInteger("000111222")).toBe("222");
    expect(largestGoodInteger("0000")).toBe("000");
    expect(largestGoodInteger("2300019")).toBe("000");
    expect(largestGoodInteger("222")).toBe("222");
  });
});