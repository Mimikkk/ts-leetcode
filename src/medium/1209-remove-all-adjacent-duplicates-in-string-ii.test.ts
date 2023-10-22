export {};

const add = (a: string, b: string) => a + b;
const concat = (...args: string[]) => args.reduce(add, "");

const last = <T>(arr: T[]) => arr[arr.length - 1];

const removeDuplicates = (s: string, k: number): string => {
  if (k === 1) return "";
  const hash: [string, number][] = [];

  for (let char of s) {
    if (!hash.length) {
      hash.push([char, 1]);
      continue;
    }
    const previous = last(hash);
    if (previous[0] === char) {
      previous[1] += 1;
    } else hash.push([char, 1]);

    if (previous[1] === k) hash.pop();
  }

  return concat(...hash.map(([char, count]) => char.repeat(count)));
};

describe("remove adjacent duplicates", () => {
  it("should return empty string", () => {
    expect(removeDuplicates("", 1)).toBe("");
  });

  it("should return string without adjacent duplicates", () => {
    expect(removeDuplicates("abbaca", 2)).toBe("ca");
  });

  it("should return string without adjacent duplicates", () => {
    expect(removeDuplicates("azxxzy", 2)).toBe("ay");
  });
});
