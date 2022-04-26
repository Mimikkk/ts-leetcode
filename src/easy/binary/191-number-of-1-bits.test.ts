export {};

const hammingWeight = (n: number): number => {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n >>>= 1;
  }
  return count;
};

describe("191 - number of 1 bits", () => {
  test("#1", () => {
    expect(hammingWeight(11)).toEqual(3);
  });

  test("#2", () => {
    expect(hammingWeight(128)).toEqual(1);
  });

  test("#3", () => {
    expect(hammingWeight(0)).toEqual(0);
  });

  test("#4", () => {
    expect(hammingWeight(1)).toEqual(1);
  });

  test("#5", () => {
    expect(hammingWeight(2)).toEqual(1);
  });

});
