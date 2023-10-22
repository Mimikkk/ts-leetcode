export {};

const isLetter = (c: string) => /[a-z]/i.test(c);

const reverseOnlyLetters = (s: string): string => {
  const chars = [...s];
  let [left, right] = [0, chars.length - 1];

  while (left < right) {
    while (left < right && !isLetter(chars[left])) ++left;
    while (left < right && !isLetter(chars[right])) --right;

    if (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      ++left;
      --right;
    }
  }

  return chars.join("");
};

describe("reverse only letters", () => {
  it("case 1", () => {
    expect(reverseOnlyLetters("ab-cd")).toEqual("dc-ba");
  });

  it("case 2", () => {
    expect(reverseOnlyLetters("a-bC-dEf-ghIj")).toEqual("j-Ih-gfE-dCba");
  });
});