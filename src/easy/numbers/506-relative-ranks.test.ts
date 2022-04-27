export {};

const findRelativeRanks = (score: number[]): string[] => {
  score.sort((a, b) => b - a);
  const ranks = new Map<number, number>();

  for (let i = 0; i < score.length; i++) ranks.set(score[i], i);

  return score.map((s) => {
    switch (ranks.get(s)) {
      case 0:
        return "Gold Medal";
      case 1:
        return "Silver Medal";
      case 2:
        return "Bronze Medal";
      default:
        return `${ranks.get(s)! + 1}`;
    }
  });
};

describe("relative ranks", () => {
  it("case 1", () => {
    expect(findRelativeRanks([5, 4, 3, 2, 1])).toEqual(["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]);
  });
});
