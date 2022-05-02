export {};

const distance = (x1: number, y1: number, x2: number, y2: number) => Math.abs(x1 - x2) + Math.abs(y1 - y2);
const allCellsDistOrder = (m: number, n: number, ...center: [number, number]): number[][] => {
  const cells: [number, number][] = [];
  for (let x = 0; x < m; x++) for (let y = 0; y < n; y++) cells.push([x, y]);

  const dist = (p: [number, number]) => distance(...center, ...p);
  const compare = (a: [number, number], b: [number, number]) => dist(a) - dist(b);
  return cells.sort(compare);
};

describe("all cells distance order", () => {
  it("case 1", () => {
    expect(allCellsDistOrder(2, 2, 0, 1)).toEqual([
      [0, 1],
      [0, 0],
      [1, 1],
      [1, 0],
    ]);
  });

  it("case 2", () => {
    expect(allCellsDistOrder(2, 3, 1, 2)).toEqual([
      [1, 2],
      [0, 2],
      [1, 1],
      [0, 1],
      [1, 0],
      [0, 0],
    ]);
  });

  it("case 3", () => {
    expect(allCellsDistOrder(1, 2, 0, 0)).toEqual([
      [0, 0],
      [0, 1],
    ]);
  });
});