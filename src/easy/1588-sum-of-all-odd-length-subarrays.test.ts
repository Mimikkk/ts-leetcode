export {};

const subarrays = (arr: number[]): number[][] => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if ((j - i + 1) % 2 === 0) continue;

      result.push(arr.slice(i, j + 1));
    }
  }

  return result;
};

const add = (a: number, b: number): number => a + b;
const sum = (arr: number[]) => arr.reduce(add, 0);
const sumOddLengthSubarrays = (arr: number[]): number => sum(subarrays(arr).map(sum));

describe("sum odd length arrays", () => {
  it("should return correct result", () => {
    expect(sumOddLengthSubarrays([1, 4, 2, 5, 3])).toEqual(58);
    expect(sumOddLengthSubarrays([1, 2])).toEqual(3);
    expect(sumOddLengthSubarrays([10, 11, 12])).toEqual(66);
  });
});