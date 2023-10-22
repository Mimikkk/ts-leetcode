export {};

const divideString = (s: string, k: number, fill: string): string[] => {
  const groups = s.match(new RegExp(`.{1,${k}}`, "g")) || [];
  groups[groups.length - 1] = groups[groups.length - 1].padEnd(k, fill);

  return groups;
};

describe("divide string into k sized groups", () => {
  it("case 1", () => {
    expect(divideString("abc", 2, "_")).toEqual(["ab", "c_"]);
  });

  it("case 2", () => {
    expect(divideString("abc", 3, "_")).toEqual(["abc"]);
  });

  it("case 3", () => {
    expect(divideString("abc", 1, "_")).toEqual(["a", "b", "c"]);
  });
});