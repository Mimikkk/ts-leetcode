export {};

const complement: Record<string, string> = {
  "(": ")",
  "{": "}",
  "[": "]",
};

const isValid = (s: string): boolean => {
  const stack: string[] = [];

  return (
    [...s].every((c) => {
      switch (c) {
        case "(":
        case "{":
        case "[":
          return stack.push(c) > 0;
        case ")":
        case "}":
        case "]":
          return complement[stack.pop() ?? ""] === c;
      }
    }) && stack.length === 0
  );
};

describe("20 - valid parentheses", () => {
  it("test case 1", () => {
    expect(isValid("()")).toEqual(true);
  });

  it("test case 2", () => {
    expect(isValid("()[]{}")).toEqual(true);
  });

  it("test case 3", () => {
    expect(isValid("(]")).toEqual(false);
  });

  it("test case 4", () => {
    expect(isValid("([)]")).toEqual(false);
  });

  it("test case 5", () => {
    expect(isValid("{[]}")).toEqual(true);
  });

  it("test case 6", () => {
    expect(isValid("]")).toEqual(false);
  });
});
