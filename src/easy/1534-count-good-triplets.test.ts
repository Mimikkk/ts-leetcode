export {};

const countGoodTriplets = (arr: number[], a: number, b: number, c: number): number => {
  let count = 0;

  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      for (let k = j + 1; k < arr.length; ++k) {
        if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) ++count;
      }
    }
  }

  return count;
};

describe("count good triplets", () => {
  it("case 1", () => {
    expect(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)).toBe(4);
  });

  it("case 2", () => {
    expect(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1)).toBe(0);
  });
});
