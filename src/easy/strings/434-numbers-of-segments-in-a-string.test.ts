export {};

const countSegments = (s: string) => s.split(/ +/).filter(Boolean).length;

describe("count segments", () => {
  it("should pass the first test", () => {
    expect(countSegments("Hello, my name is John")).toBe(5);
  });

  it("should pass the second test", () => {
    expect(countSegments("")).toBe(0);
  });
});