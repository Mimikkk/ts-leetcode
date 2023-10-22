export {};

const asc = (a: number, b: number) => a - b;
const intersect = (s1: Set<number>, s2: Set<number>) => new Set([...s1].filter((x) => s2.has(x)));

const relativeSortArray = (arr1: number[], arr2: number[]) => {
  const intersection = intersect(new Set(arr1), new Set(arr2));

  const contained: number[] = [];
  const missing: number[] = [];
  arr1.forEach((n) => {
    if (intersection.has(n)) contained.push(n);
    else missing.push(n);
  });

  const hash: Record<number, number[]> = {};
  contained.forEach((num) => hash[num]?.push(num) ?? (hash[num] = [num]));

  const sorted = arr2.map((num) => hash[num]).flat();
  return [...sorted, ...missing.sort(asc)];
};

describe("relative sort", () => {
  it("case 1", () => {
    expect(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])).toEqual([
      2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19,
    ]);
  });
});