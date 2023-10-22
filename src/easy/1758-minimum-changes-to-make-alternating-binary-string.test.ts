export {};

const minOperations = (s: string) => {
  let chars = ["1", "0"];

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (chars[i % 2] === s[i]) ++count;
  }

  return Math.min(count, s.length - count);
};

describe("minimum to alternate", () => {
  it("case 1", () => {
    expect(minOperations("0100")).toEqual(1);
  });
});
