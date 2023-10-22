export {};

const reverseString = (s: string) => s.split("").reverse().join("");

const reverseWords = (s: string) => s.split(" ").map(reverseString).join(" ");

describe("reverse words in a string iii", () => {
  test("case 1", () => {
    expect(reverseWords("Let's take LeetCode contest")).toEqual("s'teL ekat edoCteeL tsetnoc");
  });
});