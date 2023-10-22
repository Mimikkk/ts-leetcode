import { expect } from "vitest";
export {};

const checkDistances = (s: string, distance: number[]): boolean => {
  const distanceBetweenOccurrencesByChar = Object.fromEntries(
    distance.map((d, i) => [String.fromCharCode("a".charCodeAt(0) + i), d]),
  );

  const occurred = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const lastOccurrence = occurred.get(char);
    if (lastOccurrence !== undefined) {
      const distanceBetweenOccurrences = i - lastOccurrence - 1;

      if (distanceBetweenOccurrencesByChar[char] !== distanceBetweenOccurrences) return false;
    }

    occurred.set(char, i);
  }

  return true;
};

describe("2399", () => {
  it("case 1", () => {
    expect(
      checkDistances("abaccb", [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
    ).toBe(true);
  });

  it("case 2", () => {
    expect(checkDistances("aa", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(
      false,
    );
  });
});
