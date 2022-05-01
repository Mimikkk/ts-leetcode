export {};

const countBinarySubstrings = (s: string): number => {
  let [count, previous, current] = [0, 0, 1];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) ++current;
    else [previous, current] = [current, 1];

    if (previous >= current) ++count;
  }

  return count;
};

describe("countBinarySubstrings", () => {
  it("case 1", () => {
    expect(countBinarySubstrings("00110011")).toEqual(6);
  });

  it("case 2", () => {
    expect(countBinarySubstrings("10101")).toEqual(4);
  });
});