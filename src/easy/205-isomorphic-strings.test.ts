export {};

const isIsomorphic = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) return false;
    } else {
      if ([...map.values()].some((x) => x === t[i])) return false;
      map.set(s[i], t[i]);
    }
  }

  return true;
};

describe("205 - isomorphic strings", () => {
  it("should return true", () => {
    expect(isIsomorphic("egg", "add")).toBe(true);
  });

  it("should return false", () => {
    expect(isIsomorphic("foo", "bar")).toBe(false);
  });

  it("should return true", () => {
    expect(isIsomorphic("paper", "title")).toBe(true);
  });

  it("should return false", () => {
    expect(isIsomorphic("ab", "aa")).toBe(false);
  });
});
