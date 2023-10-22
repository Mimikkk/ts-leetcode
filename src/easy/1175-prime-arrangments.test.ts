export {};

const isPrime = (n: number) => {
  for (let i = 2; i <= Math.sqrt(n); ++i) if (n % i === 0) return false;
  return n > 1;
};

const mod = 1e9 + 7;
const numPrimeArrangements = (n: number) => {
  let primes = 0;
  let nonPrimes = 0;

  let count = 1;
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) count *= ++primes;
    else count *= ++nonPrimes;

    count %= mod;
  }

  return count;
};

describe("1175. Prime Arrangements", () => {
  it("should pass", () => {
    expect(numPrimeArrangements(5)).toEqual(12);
  });

  it("should pass", () => {
    expect(numPrimeArrangements(100)).toEqual(682289015);
  });
});
