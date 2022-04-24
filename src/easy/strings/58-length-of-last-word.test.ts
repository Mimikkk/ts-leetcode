export {};

const lengthOfLastWord = (s: string): number => {
  const words = s.split(/ +/).filter(Boolean);
  return words[words.length - 1]?.length || 0;
};

describe("58 - length of last word", () => {
  it("should return 0", () => {
    expect(lengthOfLastWord("")).toEqual(0);
  });

  it("should return 1", () => {
    expect(lengthOfLastWord("a")).toEqual(1);
  });


  it("should return 1", () => {
    expect(lengthOfLastWord("a ")).toEqual(1);
  });


  it("should return 1", () => {
    expect(lengthOfLastWord(" a")).toEqual(1);
  });


  it("should return 1", () => {
    expect(lengthOfLastWord(" a ")).toEqual(1);
  });


  it("should return 1", () => {
    expect(lengthOfLastWord(" a b")).toEqual(1);
  });


  it("should return 1", () => {
    expect(lengthOfLastWord(" a b ")).toEqual(1);
  });

  it("should return 1", () => {
    expect(lengthOfLastWord(" a b cca")).toEqual(3);
  });

  it("should return 1", () => {
    expect(lengthOfLastWord(" a b cca ")).toEqual(3);
  });
});
