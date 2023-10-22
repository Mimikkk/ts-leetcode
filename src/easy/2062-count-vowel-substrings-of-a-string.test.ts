export {};

const isVowel = (character: string) => "aeiou".includes(character);

const countVowelSubstrings = function (word: string) {
  let vowels: Record<string, number> = {};

  let total = 0;
  for (let i = 0; i < word.length; i++) {
    vowels = {};

    for (let j = i; j < word.length && isVowel(word[j]); j++) {
      vowels[word[j]] = (vowels[word[j]] ?? 0) + 1;
      if (Object.keys(vowels).length === 5) ++total;
    }
  }
  return total;
};

describe("count vowel substrings", () => {
  it("should return the number of vowel substrings", () => {
    expect(countVowelSubstrings("aeiouu")).toBe(2);
    expect(countVowelSubstrings("unicornarihan")).toBe(0);
    expect(countVowelSubstrings("cuaieuouac")).toBe(7);
  });
});
