export {};

const digitSum = (s: string, k: number) => {
  while (s.length > k) {
    let current = '';
    for (let i = 0; i < s.length; i += k) {
      current += s.slice(i, i + k).split('').reduce((a, b) => +a + +b, 0);
    }
    s = current;
  }
  return s;
};

describe("digit sum", () => {
  it("case 1", () => {
    expect(digitSum("123", 3)).toBe("123");
  });

  it("case 2", () => {
    expect(digitSum("123", 2)).toBe("33");
  });

  it("case 3", () => {
    expect(digitSum("11111222223", 3)).toBe("135");
  });

  it("case 4", () => {
    expect(digitSum("475730385258137", 13)).toBe("5810");
  });

  it("case 4", () => {
    expect(digitSum("475730385258137", 13)).toBe("5810");
  });
});