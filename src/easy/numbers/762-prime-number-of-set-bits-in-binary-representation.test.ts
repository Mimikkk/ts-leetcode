export {};

const range = (start: number, end: number) =>
  Array.from({ length:end - start }, (_, i) => i + start);

const countBits = (n: number) => {
  let count = 0;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  return count;
};
const isPrime = (n: number) => n > 1 ?range(2, Math.sqrt(n) + 1).every(i => n % i):false;

const countPrimeSetBits = (left: number, right: number): number =>
  range(left, right + 1)
    .map(countBits)
    .filter(isPrime).length;

describe("count prime set bits", () => {
  it("case 1", () => {
    expect(countPrimeSetBits(6, 10)).toEqual(4);
  });

  it("case 2", () => {
    expect(countPrimeSetBits(10, 15)).toEqual(5);
  });
});