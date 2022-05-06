export {};

const sortArrayByParityII = (nums: number[]) =>
  nums
    .sort(a => ~-(a & 1))
    .map((_, i) => nums[(i >> 1) + (i & 1) * (nums.length >> 1)]);

describe("sort array by parity ii", () => {
  it("should pass", () => {
    expect(sortArrayByParityII([3, 1, 2, 4])).toEqual([4, 3, 2, 1]);
  });

  it("should pass", () => {
    expect(sortArrayByParityII([0])).toEqual([0]);
  });

  it("should pass", () => {
    expect(sortArrayByParityII([4, 2, 5, 7])).toEqual([2, 5, 4, 7]);
  });
});
