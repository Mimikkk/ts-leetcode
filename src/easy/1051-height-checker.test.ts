export {};

const asc = (a: number, b: number) => a - b;
const sorted = (nums: number[]) => [...nums].sort(asc);
const count = <T>(items: T[], predicate: (item: T, index: number) => boolean) => items.filter(predicate).length;
const unexpected = (expected: number[]) => (next: number, index: number) => next !== expected[index];

const heightChecker = (heights: number[]): number => count(heights, unexpected(sorted(heights)));

describe("height checker", () => {
  it("case 1", () => {
    expect(heightChecker([1, 1, 4, 2, 1, 3])).toBe(3);
  });

  it("case 2", () => {
    expect(heightChecker([5, 1, 2, 3, 4])).toBe(5);
  });
});
