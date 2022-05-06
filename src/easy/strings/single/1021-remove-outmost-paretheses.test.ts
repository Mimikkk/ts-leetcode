export {};

const removeOuterParentheses = (s: string): string => {
  const output = [];
  const result = [];

  for (let char of s) {
    switch (char) {
      case "(":
        if (output.length) result.push(char);
        output.push(")");
        break;
      case ")":
        output.pop();
        if (output.length) result.push(char);
        break;
    }
  }

  return result.join("");
};

describe("remove outer parentheses", () => {
  it("case 1", () => {
    expect(removeOuterParentheses("()()")).toEqual("");
  });

  it("case 2", () => {
    expect(removeOuterParentheses("(()())")).toEqual("()()");
  });

  it("case 3", () => {
    expect(removeOuterParentheses("()(())")).toEqual("()");
  });

  it("case 3", () => {
    expect(removeOuterParentheses("()((()))")).toEqual("(())");
  });

  it("case 4", () => {
    expect(removeOuterParentheses("(()())(())")).toEqual("()()()");
  });

  it("case 5", () => {
    expect(removeOuterParentheses("()()()()(())")).toEqual("()");
  });

  it("case 6", () => {
    expect(removeOuterParentheses("(()())(())(()(()))")).toEqual("()()()()(())");
  });
});