export {};

const isSameAfterReversals = (num: number) =>
  num === 0 || !`${num}`.endsWith("0");

describe("is same after reversed numbers", () => {
  it("should return true", () => {
    expect(isSameAfterReversals(123)).toEqual(true);
    expect(isSameAfterReversals(123400)).toEqual(false);
    expect(isSameAfterReversals(0)).toEqual(true);
  });
});