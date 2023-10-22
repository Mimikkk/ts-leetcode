export {};

const countElements = (nums: number[]): number =>
  nums
    .filter(num => nums.some((n) => n < num))
    .filter(num => nums.some((n) => n > num)).length;

describe("count elements", () => {
  it("case 1", () => {
    expect(countElements([11, 7, 2, 15])).toEqual(2);
  });

  it("case 2", () => {
    expect(countElements([-3, 3, 3, 90])).toEqual(2);
  });
});