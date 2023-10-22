export {};

const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];
const sumDigits = (n: number) => {
  let [sum, mod] = [0, 0];

  while (n > 0) ([n, mod] = divmod(n, 10), sum += mod);

  return sum;
};

const countBalls = (lowLimit: number, highLimit: number): number => {
  let counter: Record<number, number> = {};

  for (let n = lowLimit; n <= highLimit; n++) {
    counter[sumDigits(n)] = (counter[sumDigits(n)] || 0) + 1;
  }

  return Math.max(...Object.values(counter));
};

describe("count balls", () => {
  test("should return correct result", () => {
    expect(countBalls(1, 10)).toEqual(2);
    expect(countBalls(5, 15)).toEqual(2);
    expect(countBalls(19, 28)).toEqual(2);
  });
});