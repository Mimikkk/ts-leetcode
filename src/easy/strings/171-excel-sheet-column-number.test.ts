export {};

const titleToNumber = (title: string): number =>
  [...title].map((c) => c.charCodeAt(0) - 64)
            .reduce((acc, curr) => acc * 26 + curr);

describe("171 - excel number column number", () => {
  it("columnTitle: A", () => {
    expect(titleToNumber("A")).toEqual(1);
  });

  it("columnTitle: AB", () => {
    expect(titleToNumber("AB")).toEqual(28);
  });

  it("columnTitle: ZY", () => {
    expect(titleToNumber("ZY")).toEqual(701);
  });

  it("columnTitle: ZZ", () => {
    expect(titleToNumber("ZZ")).toEqual(702);
  });
});
