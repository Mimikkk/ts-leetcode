export {};

const countBits = (n: number) => {
  let count = 0;
  while ((n & 1 && count++, n))  n >>= 1;
  return count;
};
const asc = (a: number, b: number) => a - b;
const byOneBits = (a: number, b: number) => asc(countBits(a), countBits(b)) || asc(a, b);
const sortByBits = (arr: number[]): number[] => arr.sort(byOneBits);

describe("sort integers", () => {
  it("case 1", () => {
    expect(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])).toEqual([0, 1, 2, 4, 8, 3, 5, 6, 7]);
  });

  it("case 2", () => {
    expect(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])).toEqual([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]);
  });
});
