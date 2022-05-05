export {};

const sortArrayByParity = (nums: number[]): number[] => nums.sort((a, b) => a % 2 - b % 2);

describe("sort array by parity", () => {
  it("should pass", () => {
    expect(sortArrayByParity([3, 1, 2, 4])).toEqual([2, 4, 3, 1]);
  });

  it("should pass", () => {
    expect(sortArrayByParity([0])).toEqual([0]);
  });
});
