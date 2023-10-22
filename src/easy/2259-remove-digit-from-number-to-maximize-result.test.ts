export {};

const removeDigit = (number: string, digit: string) => {
  let indexToRemove: number = 0;

  for (let i = 0; i < number.length; ++i) {
    if (number[i] === digit) {
      indexToRemove = i;

      if (i < number.length - 1 && number.charCodeAt(i) < number.charCodeAt(i + 1)) break;
    }
  }

  return number.substring(0, indexToRemove) + number.substring(indexToRemove + 1);
};

describe("remove digit", () => {
  it("case 1", () => {
    expect(removeDigit("1432219", "3")).toBe("142219");
  });
});