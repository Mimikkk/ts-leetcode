export {};

const getRow = (level: number): number[] => {
  const row = [];
  for (let i = 0; i <= level; i++) {
    row.push(1);
    for (let j = i - 1; j > 0; j--) row[j] += row[j - 1];
  }
  return row;
};

describe("119 - pascal triangles II", () => {
  it("get first row", () => {
    expect(getRow(0)).toEqual([1]);
  });

  it("get second row", () => {
    expect(getRow(1)).toEqual([1, 1]);
  });

  it("get third row", () => {
    expect(getRow(2)).toEqual([1, 2, 1]);
  });

  it("get fourth row", () => {
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
  });

  it("get fifth row", () => {
    expect(getRow(4)).toEqual([1, 4, 6, 4, 1]);
  });

  it("get sixth row", () => {
    expect(getRow(5)).toEqual([1, 5, 10, 10, 5, 1]);
  });

  it("get seventh row", () => {
    expect(getRow(6)).toEqual([1, 6, 15, 20, 15, 6, 1]);
  });
});
