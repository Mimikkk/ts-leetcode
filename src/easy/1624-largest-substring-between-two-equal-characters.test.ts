import { R } from "@shared/modules";

const maxLengthBetweenEqualCharacters = (s: string) => {
  let pairs = R.empty<number, number>();

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        pairs[i] = j - i - 1;
      }
    }
  }

  return R.isEmpty(pairs) ? -1 : R.maxValue(pairs);
};

describe("max lengrth between equal characters", () => {
  it("case 1", () => {
    expect(maxLengthBetweenEqualCharacters("ba")).toBe(-1);
    expect(maxLengthBetweenEqualCharacters("aa")).toBe(0);
    expect(maxLengthBetweenEqualCharacters("abca")).toBe(2);
    expect(maxLengthBetweenEqualCharacters("abcaba")).toBe(4);
    expect(maxLengthBetweenEqualCharacters("babcaa")).toBe(3);
  });
});
