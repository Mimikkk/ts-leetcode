export {};

const findTheDistanceValue = (arr1: number[], arr2: number[], d: number) =>
  arr1.filter(n1 => arr2.every(n2 => Math.abs(n1 - n2) > d)).length;

describe("find the distance value between two arrays", () => {
  it("case 1", () => {
    expect(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)).toBe(2);
  });

  it("case 2", () => {
    expect(findTheDistanceValue([1, 4, 2, 3], [-4,-3,6,10,20,30], 3)).toBe(2);
  });
});
