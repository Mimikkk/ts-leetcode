export {};

const last = (str: string[]) => str[str.length - 1];

const removeDuplicates = (s: string): string => {
  const result = [];

  for (const e of s) {
    if (last(result) === e) result.pop();
    else result.push(e);
  }

  return result.join("");
};

describe("remove adjacent duplicates", () => {
  it("should return empty string", () => {
    expect(removeDuplicates("")).toBe("");
  });

  it("should return string without adjacent duplicates", () => {
    expect(removeDuplicates("abbaca")).toBe("ca");
  });

  it("should return string without adjacent duplicates", () => {
    expect(removeDuplicates("azxxzy")).toBe("ay");
  });
});
