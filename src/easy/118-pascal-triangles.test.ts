export {};

const generate = (height: number): number[][] => {
  if (height === 0) return [];
  if (height === 1) return [[1]];
  if (height === 2) return [[1], [1, 1]];
  let rows = generate(height - 1);
  rows.push([
    1,
    ...rows[rows.length - 1].reduceRight<number[]>((acc, n, i, last) => {
      if (i === 0) return acc;
      acc.push(n + last[i - 1]);
      return acc;
    }, []),
    1,
  ]);
  return rows;
};

describe("118 - pascal triangles", () => {
  it("case 1", () => {
    expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });

  it("case 2", () => {
    expect(generate(0)).toEqual([]);
  });

  it("case 3", () => {
    expect(generate(1)).toEqual([[1]]);
  });
});
