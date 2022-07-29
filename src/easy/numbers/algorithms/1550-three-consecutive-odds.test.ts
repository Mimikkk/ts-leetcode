export {};

const isOdd = (n: number) => n % 2 === 1;
const threeConsecutiveOdds = (arr: number[]): boolean => {
  let count = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (isOdd(arr[i])) ++count;
    else count = 0;

    if (count === 3) return true;
  }

  return false;
};

describe("the three consecutive odds", () => {
  it("should return correct result", () => {
    expect(threeConsecutiveOdds([2, 6, 4, 1])).toBe(false);
    expect(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])).toBe(true);
  });
});