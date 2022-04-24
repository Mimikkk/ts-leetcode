export {};

const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const convertToTitle = (n: number): string => {
  let result = [];

  let mod;
  while (n-- > 0) {
    [n, mod] = divmod(n, 26);
    result.unshift(String.fromCharCode(mod + 65));
  }
  return result.join("");
};

describe("168 - excel sheet column title", () => {
  test("#1", () => {
    expect(convertToTitle(1)).toEqual("A");
  });

  test("#2", () => {
    expect(convertToTitle(28)).toEqual("AB");
  });

  test("#3", () => {
    expect(convertToTitle(701)).toEqual("ZY");
  });

  test("#4", () => {
    expect(convertToTitle(702)).toEqual("ZZ");
  });
});
