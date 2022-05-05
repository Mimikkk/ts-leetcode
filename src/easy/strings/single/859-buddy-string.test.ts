export {};

const buddyStrings = (a: string, b: string): boolean => {
  if (a.length != b.length) return false;

  const difference = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) difference.push(i);
    if (difference.length > 2) return false;
  }
  if (!difference.length) return a.length != [...new Set(a)].length;

  const [i, j] = difference;
  return a[i] == b[j] && b[i] == a[j];
};

describe("buddy strings", () => {
  it("case 1", () => {
    expect(buddyStrings("ab", "ba")).toEqual(true);
  });

  it("case 2", () => {
    expect(buddyStrings("ab", "ab")).toEqual(false);
  });

  it("case 3", () => {
    expect(buddyStrings("aa", "aa")).toEqual(true);
  });
});
