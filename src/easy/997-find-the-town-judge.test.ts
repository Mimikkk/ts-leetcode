export {};

const findJudge = (n: number, trust: [number, number][]): number => {
  if (n === 1) return 1;
  const trustMap: Record<number, number> = {};
  const trustingPeople: Set<number> = new Set();
  for (const [a, b] of trust) {
    trustMap[b] = trustMap[b] + 1 || 1;
    trustingPeople.add(a);
  }

  return +(Object.entries(trustMap).filter(([k]) => !trustingPeople.has(+k)).find(([, v]) => v == n - 1)?.[0] ?? -1);
};

describe("find judge", () => {
  it("case 1", () => {
    expect(findJudge(2, [[1, 2]])).toEqual(2);
  });

  it("case 2", () => {
    expect(findJudge(3, [[1, 3], [2, 3]])).toEqual(3);
  });

  it("case 3", () => {
    expect(findJudge(3, [[1, 3], [2, 3], [3, 1]])).toEqual(-1);
  });

  it("case 4", () => {
    expect(findJudge(2, [[1, 2], [2, 1]])).toEqual(-1);
  });

  it("case 5", () => {
    expect(findJudge(1, [])).toEqual(1);
  });

});
