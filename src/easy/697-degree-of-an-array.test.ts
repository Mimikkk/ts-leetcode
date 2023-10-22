export {};

const createCounter = (nums: number[]) => {
  const counter: Record<number, number> = {};
  nums.forEach((n) => (counter[n] = (counter[n] || 0) + 1));
  return counter;
};

const findShortestSubArray = (nums: number[]): number => {
  let counter = createCounter(nums);
  let max = Math.max(...Object.values(counter));

  const hasSameDegree = ([, degree]: [string, number]) => degree === max;
  const indices = ([num]: [string, number]) => nums.lastIndexOf(+num) - nums.indexOf(+num) + 1;

  return Math.min(...Object.entries(counter).filter(hasSameDegree).map(indices));
};

describe("find shortest subarray", () => {
  it("case 1", () => {
    expect(findShortestSubArray([1, 2, 2, 3, 1])).toEqual(2);
  });

  it("case 2", () => {
    expect(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])).toEqual(6);
  });
});