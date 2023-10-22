export {};

const reverseString = (s: string[]): void => {
  for (let i = 0; i < s.length / 2; i++) [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
};

describe("Reverse String", () => {
  it("should return the reverse of the string", () => {
    let string = ["h", "e", "l", "l", "o"];
    reverseString(string);
    expect(string).toEqual(["o", "l", "l", "e", "h"]);
  });
});