export {};

const truncateSentence = (s: string, k: number): string => s.split(" ").slice(0, k).join(" ");

describe("truncate sentence", () => {
  it("case 1", () => {
    expect(truncateSentence("Hello how are you Contestant", 4)).toEqual("Hello how are you");
  });

  it("case 2", () => {
    expect(truncateSentence("What is the solution", 4)).toEqual("What is the solution");
  });
});
