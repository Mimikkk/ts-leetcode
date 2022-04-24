export {};

const wordPattern = (pattern: string, s: string): boolean => {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  let wordByPattern: Record<string, string> = {};
  let patternByWord: Record<string, string> = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (wordByPattern[char] && wordByPattern[char] !== word) return false;
    if (patternByWord[word] && patternByWord[word] !== char) return false;

    wordByPattern[char] = word;
    patternByWord[word] = char;
  }

  return true;
};

describe("wordPattern", () => {
  it("the its", () => {
    expect(wordPattern("abba", "dog cat cat dog")).toEqual(true);
  });

  it("the its", () => {
    expect(wordPattern("abba", "dog cat cat fish")).toEqual(false);
  });

  it("the its", () => {
    expect(wordPattern("aaaa", "dog cat cat dog")).toEqual(false);
  });

  it("the its", () => {
    expect(wordPattern("abba", "dog dog dog dog")).toEqual(false);
  });

  it("the its", () => {
    expect(wordPattern("aaaa", "dog dog dog dog")).toEqual(true);
  });
});
