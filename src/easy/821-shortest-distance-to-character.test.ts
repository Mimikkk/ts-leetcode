export {};

const range = (start: number, end: number) =>
  Array.from({ length:end - start }, (_, i) => i + start);

const min = (a: number[]) => Math.min(...a);

const shortestToChar = (s: string, target: string): number[] => {
  const chars = Object.entries(s).filter(([, char]) => char === target).map(([i]) => +i);
  const difference = (i: number) => (j: number) => Math.abs(j - i);

  return range(0, s.length).map(difference).map((fn) => chars.map(fn)).map(min);
};

describe("shorest to characters", () => {
  it("case 1", () => {
    expect(shortestToChar("loveleetcode", "e")).toEqual([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]);
  });

  it("case 2", () => {
    expect(shortestToChar("aaab", "b")).toEqual([3, 2, 1, 0]);
  });
});