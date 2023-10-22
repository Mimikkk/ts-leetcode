export {};

const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const convertToBase7 = (num: number): string => {
  let result = "";
  let sign = "";

  if (num < 0) {
    sign = "-";
    num = -num;
  }

  let remainder;
  while (num > 0) {
    [num, remainder] = divmod(num, 7);
    result = `${remainder}${result}`;
  }

  if (!result) result = "0";
  return `${sign}${result}`;
};

describe("504-base-7", () => {
  it("it should pass", () => {
    expect(convertToBase7(100)).toEqual("202");
  });

  it("it should pass", () => {
    expect(convertToBase7(7)).toEqual("10");
  });
});
