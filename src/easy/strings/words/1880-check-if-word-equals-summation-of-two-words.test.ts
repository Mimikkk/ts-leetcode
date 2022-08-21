export {};

const encoder = new TextEncoder();
const valueFn = (word: string) =>
  +encoder
    .encode(word)
    .map((v) => v - 97)
    .join("");

const isSumEqual = (first: string, second: string, target: string) =>
  valueFn(first) + valueFn(second) === valueFn(target);

describe("is sum equal", () => {
  it("case 1", () => {
    expect(isSumEqual("acb", "cba", "cdb")).toBe(true);
  });
  it("case 2", () => {
    expect(isSumEqual("aaa", "a", "aab")).toBe(false);
  });
  it("case 3", () => {
    expect(isSumEqual("aaa", "a", "aaaa")).toBe(true);
  });
});