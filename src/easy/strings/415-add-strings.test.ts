export {};


// const addStrings = (num1: string, num2: string): string => `${+num1 + +num2}`;

const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const addStrings = (num1: string, num2: string): string => {
  const s1 = [...num1].reverse();
  const s2 = [...num2].reverse();

  const result = [];
  let remainder;
  let [carry, i] = [0, 0];
  while (i < s1.length || i < s2.length) {
    const num1Digit = s1[i] ?+s1[i]:0;
    const num2Digit = s2[i] ?+s2[i]:0;
    const sum = num1Digit + num2Digit + carry;

    [carry, remainder] = divmod(sum, 10);
    result.push(remainder);
    ++i;
  }

  if (carry) result.push(carry);
  return result.reverse().join("");
};

describe("addStrings", () => {
  it("should pass", () => {
    expect(addStrings("123", "456")).toEqual("579");
  });

  it("should pass", () => {
    expect(addStrings("100", "100")).toEqual("200");
  });

  it("should pass", () => {
    expect(addStrings("1001", "100")).toEqual("1101");
  });

  it("should pass", () => {
    expect(addStrings("100", "1001")).toEqual("1101");
  });
});
