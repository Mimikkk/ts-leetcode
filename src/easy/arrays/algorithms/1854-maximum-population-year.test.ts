export {};

const maximumPopulation = (logs: [number, number][]) => {
  const years = new Array(101).fill(0);
  for (const [birth, death] of logs) {
    for (let i = birth; i < death; ++i) ++years[i - 1950];
  }

  return years.indexOf(Math.max(...years)) + 1950;
}

describe("max pop", () => {
  it("case 1", () => {
    expect(
      maximumPopulation([
        [1993, 1999],
        [2000, 2010],
      ]),
    ).toBe(1993);
  });
  it("case 2", () => {
    expect(
      maximumPopulation([
        [1950, 1961],
        [1960, 1971],
        [1970, 1981],
      ]),
    ).toBe(1960);
  });
});
