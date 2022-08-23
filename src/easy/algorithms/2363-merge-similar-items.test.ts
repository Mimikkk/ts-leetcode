
type item = [number, number];
module Item {
  export const byValue = ([a]: item, [b]: item) => a - b;
}
const mergeSimilarItems = (items1: item[], items2: item[]): item[] => {
  const map: Record<string, number> = {};

  for (const [value, count] of items1) map[value] = count;
  for (const [value, count] of items2) map[value] = (map[value] || 0) + count;

  return Object.entries(map)
    .map(([value, count]) => [+value, count] as item)
    .sort(Item.byValue);
};

describe("merge similar items", () => {
  it("case 1", () => {
    expect(
      mergeSimilarItems(
        [
          [1, 1],
          [4, 5],
          [3, 8],
        ],
        [
          [3, 1],
          [1, 5],
        ],
      ),
    ).toEqual([
      [1, 6],
      [3, 9],
      [4, 5],
    ]);
  });
  it("case 2", () => {
    expect(
      mergeSimilarItems(
        [
          [1, 1],
          [3, 2],
          [2, 3],
        ],
        [
          [2, 1],
          [3, 2],
          [1, 3],
        ],
      ),
    ).toEqual([
      [1, 4],
      [2, 4],
      [3, 4],
    ]);
  });
});
