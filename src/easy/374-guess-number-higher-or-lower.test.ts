export {};

const guess = (n: number) => 0;

const guessNumber = (n: number): number => {
  let low = 1;
  let high = n;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guessed = guess(mid);
    if (guessed === 0) {
      return mid;
    } else if (guessed === -1) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

describe("guessNumber", () => {
  it("should return the number if it is correct", () => {
    expect(guessNumber(5)).toEqual(3);
  });
});
