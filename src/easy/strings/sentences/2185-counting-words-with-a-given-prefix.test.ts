export {};

const prefixCount = (sentence: string, prefix: string): number =>
  sentence.split(" ")
          .filter((word) => word.startsWith(prefix)).length;

describe("is prefix of word", () => {
  it("case 1", () => {
    expect(prefixCount("i love eating burger", "burg")).toBe(1);
  });

  it("case 2", () => {
    expect(prefixCount("this problem is an easy problem", "pro")).toBe(2);
  });

  it("case 3", () => {
    expect(prefixCount("i am tired", "you")).toBe(0);
  });
});
