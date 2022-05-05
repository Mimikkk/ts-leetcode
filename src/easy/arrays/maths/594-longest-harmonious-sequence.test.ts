export {};

const createCounter = (nums: number[]) => {
  const counter: Record<number,number> = {};
  nums.forEach(n => counter[n] = (counter[n] || 0) + 1);
  return counter;
};

const findLHS = (nums: number[]): number => {
  const counter = createCounter(nums);
  const sum = ([key, value]: [string, number]) => value + counter[+key + 1] || 0;
  return Math.max(0, ...Object.entries(counter).map(sum));
};

describe("LHS", () => {
  it("should pass the first test", () => {
    expect(findLHS([1, 3, 2, 2, 5, 2, 3, 7])).toEqual(5);
  });

  it("should pass the second test", () => {
    expect(findLHS([1, 3, 2, 2, 5, 2, 3, 7, 8])).toEqual(5);
  });

  it("should pass the third test", () => {
    expect(findLHS([1, 2, 3, 4])).toEqual(2);
  });

  it("should pass the fourth test", () => {
    expect(findLHS([1, 1, 1, 1])).toEqual(0);
  });

  it("should pass the fourth test", () => {
    expect(findLHS([])).toEqual(0);
  });
});
