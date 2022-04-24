const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const isHappy = (n: number): boolean => {
  const seen = new Set<number>();

  while (n !== 1) {
    let sum = 0;
    while (n > 0) [[n, sum]] = [divmod(n, 10)].map(([q, r]) => [q, sum + r ** 2]);

    if (seen.has(sum)) return false;
    else seen.add(sum);
    n = sum;
  }

  return true;
};

describe("202 - happy number", () => {
  it("Case 1", () => {
    expect(isHappy(19)).toEqual(true);
  });

  it("Case 2", () => {
    expect(isHappy(2)).toEqual(false);
  });

  it("Case 3", () => {
    expect(isHappy(1)).toEqual(true);
  });
});
