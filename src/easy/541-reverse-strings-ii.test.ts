export {};

const reverseArr = (arr: string[], k: number) => {
  for (let i = 0; i < arr.length; i += 2 * k) {
    arr.splice(i, 0, ...arr.splice(i, k).reverse());
  }
  return arr;
};

const reverseStr = (s: string, k: number) => reverseArr(s.split(""), k).join("");

describe("reverse string ii", () => {
  it("can reverse string", () => {
    expect(reverseStr("abcdefg", 2)).toEqual("bacdfeg");
  });

  it("can reverse string", () => {
    expect(reverseStr("abcdefg", 3)).toEqual("cbadefg");
  });

  it("can reverse string", () => {
    expect(reverseStr("abcd", 2)).toEqual("bacd");
  });
});