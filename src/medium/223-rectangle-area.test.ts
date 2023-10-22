const computeArea = (
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number,
): number => {
  const areaA = (ax2 - ax1) * (ay2 - ay1);
  const areaB = (bx2 - bx1) * (by2 - by1);

  const xOverlap = Math.max(0, Math.min(ax2, bx2) - Math.max(ax1, bx1));
  const yOverlap = Math.max(0, Math.min(ay2, by2) - Math.max(ay1, by1));
  return areaA + areaB - xOverlap * yOverlap;
};

describe("compute overlap area", () => {
  it("case 1", () => {
    expect(computeArea(-3, 0, 3, 4, 0, -1, 9, 2)).toBe(45);
  });
});
