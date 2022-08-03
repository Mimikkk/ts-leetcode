export {};

const mostWordsFound = (sentences: string[]): number =>
  sentences.map((s) => s.split(" ").length).reduce((a, b) => Math.max(a, b), 0);

describe("most words", () => {
  it("should return the most words", () => {
    expect(mostWordsFound(["this is a test", "this is another test"])).toEqual(
      4,
    );
  });
});