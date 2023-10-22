export {};

const asc = (a: number, b: number): number => a - b;
const canMakeArithmeticProgression = (arr: number[]): boolean => {
  arr.sort(asc);
  const diff = arr[1] - arr[0];

  for (let i = 2; i < arr.length; ++i) {
    if (arr[i] - arr[i - 1] !== diff) return false;
  }

  return true;
};

describe("can make arithmeticc progression from sequecnce", () => {
  it("case 1", () => {
    expect(canMakeArithmeticProgression([3, 5, 1])).toBeTruthy();
  });

  it("case 2", () => {
    expect(canMakeArithmeticProgression([1, 2, 4])).toBeFalsy();
  });
});
