import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const reverseString = (s: string) => s.split("").reverse().join("");

const reverseWords = (s: string) => s.split(" ").map(reverseString).join(" ");

describe("reverse words in a string iii", () => {
  it("case 1", () => {
    expect(reverseWords("Let's take LeetCode contest")).toEqual("s'teL ekat edoCteeL tsetnoc");
  });
});