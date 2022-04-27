export {};

const char = (c: string) => c.charCodeAt(0);

const asupper = (c: number) => c >= 65 && c <= 90 ?c | 32:c;

const toLowerCase = (s: string): string => String.fromCharCode(
  ...[...s].map(char).map(asupper),
);

describe("to lowercase", () => {
  it("should return lowercase string", () => {
    expect(toLowerCase("TEST")).toBe("test");
  });

  it("should return lowercase string", () => {
    expect(toLowerCase("")).toBe("");
  });

  it("should return lowercase string", () => {
    expect(toLowerCase("A")).toBe("a");
  });

  it("abcdefghijklmnopqrstuvwxyz", () => {
    expect(toLowerCase("ABCDEFGHIJKLMNOPQRSTUVWXYZ@$$#%!^^!^")).toBe("abcdefghijklmnopqrstuvwxyz@$$#%!^^!^");
  });
});
