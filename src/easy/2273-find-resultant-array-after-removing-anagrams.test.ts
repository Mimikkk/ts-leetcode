export {};
const isAnagram = (a: string, b: string) =>
  a.split("").sort().join("") === b.split("").sort().join("");

const removeAnagrams = (words: string[]): string[] => {
  let flag = false;
  do {
    flag = false;
    for (let i = words.length - 1; i >= 1; --i) {
      if (isAnagram(words[i], words[i - 1])) {
        words.splice(i, 1);
        flag = true;
      }
    }
  } while (flag);

  return words;
};

describe("remove anagrams", () => {
  it("case 1", () => {
    expect(removeAnagrams(["code", "doce", "ecod", "frame", "fraem"])).toEqual([
      "code",
      "frame",
    ]);
  });
  it("case 2", () => {
    expect(removeAnagrams(["code", "doce"])).toEqual(["code"]);
  });
  it("case 3", () => {
    expect(removeAnagrams(["poke", "pkoe", "okpe", "ekop"])).toEqual(["poke"]);
  });
});
