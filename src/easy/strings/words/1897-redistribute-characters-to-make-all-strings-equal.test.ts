import { R } from "shared/modules";

const makeEqual = (words: string[]) =>
  R.values(R.counter(words.join(""))).every((v) => v % words.length === 0);

describe("make equal", () => {
  it("case 1", () => {
    expect(makeEqual(["abc", "aabc", "bc"])).toBe(true);
  });
  it("case 2", () => {
    expect(makeEqual(["ab", "a"])).toBe(false);
  });
});
