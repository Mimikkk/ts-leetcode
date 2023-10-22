export {};

const findPoisonedDuration = (timeSeries: number[], duration: number): number => {
  let result = duration;
  for (let i = 1; i < timeSeries.length; i++) {
    result += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
  }
  return result;
};

describe("find poisoned duration", () => {
  it("time series", () => {
    expect(findPoisonedDuration([1, 4], 2)).toEqual(4);
  });

  it("time series", () => {
    expect(findPoisonedDuration([1, 2], 2)).toEqual(3);
  });

  it("time series", () => {
    expect(findPoisonedDuration([1, 2, 3, 4, 5], 2)).toEqual(6);
  });

  it("time series", () => {
    expect(findPoisonedDuration([1, 2, 3, 4, 5], 5)).toEqual(9);
  });
});