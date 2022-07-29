export {};

const largestAltitude = (gain: number[]): number => {
  let height = 0;
  let max = height;
  for (let i = 0; i < gain.length; i++) {
    height += gain[i];
    if (height > max) max = height;
  }

  return max;
};

describe("find highest altitude", () => {
  it("should return correct result", () => {
    expect(largestAltitude([-5, 1, 5, 0, -7])).toEqual(1);
    expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toEqual(0);
  });
});