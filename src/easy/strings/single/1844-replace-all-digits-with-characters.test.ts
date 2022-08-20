export {};

const shift = (c: string, n: number) => String.fromCharCode(c.charCodeAt(0) + n);
const replaceDigits = (s: string) => {
  const result = [];

  for (let i = 0; i < s.length; i += 2) {
    result.push(s[i]);
    if (i + 1 < s.length) result.push(shift(s[i], Number(s[i + 1])));
  }

  return result.join("");
};

describe("replaceDigits", () => {
  it("case 1", () => {
    expect(replaceDigits("a1c1e1")).toBe("abcdef");
  });
  it("case 2", () => {
    expect(replaceDigits("a1b2c3d4e")).toBe("abbdcfdhe");
  });
});