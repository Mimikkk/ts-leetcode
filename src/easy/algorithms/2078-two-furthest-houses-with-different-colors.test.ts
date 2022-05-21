export {};

const maxDistance = (colors: number[]) => {
  const n = colors.length;

  let [i, j] = [0, n - 1];
  while (colors[0] == colors[j]) --j;
  while (colors[n - 1] == colors[i]) ++i;

  return Math.max(n - 1 - i, j);
};

describe("max distance", () => {
  it("case 1", () => {
    expect(maxDistance([1, 1, 1, 6, 1, 1, 1])).toBe(3);
  });

  it("case 2", () => {
    expect(maxDistance([1, 8, 3, 8, 3])).toBe(4);
  });

  it("case 3", () => {
    expect(maxDistance([0, 1])).toBe(1);
  });
});
