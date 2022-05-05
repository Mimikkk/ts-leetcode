export {};

const smallestRangeI = (nums: number[], k: number): number => {
  const range = Math.max(...nums) - Math.min(...nums);
  return range > 2 * k ? range - 2 * k : 0;
};

describe("Tests", () => {
  test("Test 1", () => {
    expect(smallestRangeI([1], 0)).toEqual(0);
  });

  test("Test 2", () => {
    expect(smallestRangeI([0, 10], 2)).toEqual(6);
  });

  test("Test 3", () => {
    expect(smallestRangeI([1, 3, 6], 3)).toEqual(0);
  });
});