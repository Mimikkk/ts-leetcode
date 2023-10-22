export {};

const findTheDifference = (s: string, t: string): string => {
  const ss = [...s].sort();
  const ts = [...t].sort();

  const len = Math.max(ss.length, ts.length);
  for (let i = 0; i < len; i++) if (ss[i] !== ts[i]) return ts[i];

  return "";
};

describe("findTheDifference", () => {
  it("#1", () => {
    expect(findTheDifference("abcd", "abcde")).toEqual("e");
  });
});