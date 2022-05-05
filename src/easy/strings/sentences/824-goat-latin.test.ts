export {};

const vowels = "aeiouAEIOU";

const first = (s: string) => s[0];
const shiftFirst = (s: string) => `${s.substring(1)}${first(s)}`;

const beginsWithVowel = (s: string) => vowels.includes(first(s));
const withMa = (s: string) => `${s}ma`;
const withATimes = (s: string, times: number) => `${s}${"a".repeat(times + 1)}`;

const toGoatLatin = (sentence: string): string =>
  sentence.split(" ")
          .map((word) => beginsWithVowel(word) ?word:shiftFirst(word))
          .map(withMa)
          .map(withATimes)
          .join(" ");

describe("goat latin", () => {
  it("case 1", () => {
    expect(toGoatLatin("I speak Goat Latin")).toEqual("Imaa peaksmaaa oatGmaaaa atinLmaaaaa");
  });
});
