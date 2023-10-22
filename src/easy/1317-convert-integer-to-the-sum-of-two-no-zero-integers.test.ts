export {};

const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];
const includesZero = (n: number) => {
  let mod;
  while (n > 0) {
    [n, mod] = divmod(n, 10);
    if (!mod) return true;
  }

  return false;
};

const getNoZeroIntegers = (n: number) => {
  let [i, j] = [1, n - 1];
  while (i < j) {
    if (![i, j].some(includesZero)) return [i, j];
    i++;
    j--;
  }

  return [1, n - 1];
};

describe("get no zero integers", () => {
  it("case 1", () => {
    expect(getNoZeroIntegers(2)).toEqual([1, 1]);
  });

  it("case 1", () => {
    expect(getNoZeroIntegers(11)).toEqual([2, 9]);
  });
});
