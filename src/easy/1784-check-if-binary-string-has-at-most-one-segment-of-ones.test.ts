export {};

const checkOnesSegment = (s: string) => s.split(/1+/g).length === 2;

describe("check ones segment", () => {
  it("case 1", () => {
    expect(checkOnesSegment("10")).toEqual(true);
  });

  it("case 2", () => {
    expect(checkOnesSegment("01")).toEqual(true);
  });

  it("case 3", () => {
    expect(checkOnesSegment("1101")).toEqual(false);
  });

  it("case 4", () => {
    expect(checkOnesSegment("11")).toEqual(true);
  });
});