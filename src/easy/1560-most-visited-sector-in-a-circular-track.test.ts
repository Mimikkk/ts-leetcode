export {};

const mostVisited = (n: number, rounds: number[]): number[] => {
  const start = rounds[0];
  const end = rounds[rounds.length - 1];

  const result = [];
  if (start <= end) {
    for (let i = start; i <= end; i++) result.push(i);
  } else {
    for (let i = 1; i <= end; i++) result.push(i);
    for (let i = start; i <= n; i++) result.push(i);
  }

  return result;
};

describe("most visited track", () => {
  it("should return correct result", () => {
    expect(mostVisited(4, [1, 3, 1, 2])).toEqual([1, 2]);
    expect(mostVisited(2, [2, 1, 2, 1, 2, 1, 2, 1, 2])).toEqual([2]);
    expect(mostVisited(7, [1, 3, 5, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
