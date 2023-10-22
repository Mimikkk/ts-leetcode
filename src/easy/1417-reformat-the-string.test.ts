const isLetter = (c: string): boolean => !!c.match(/[a-z]/i);
const splitIntoDigitsAndLetters = (s: string): [string[], string[]] => {
  let letters: string[] = [];
  let digits: string[] = [];

  for (let c of s) (isLetter(c) ? letters : digits).push(c);

  return [letters, digits];
};
const zip = <T>(a: T[], b: T[]): [T, T][] => {
  if (a.length < b.length) return a.map((x, i) => [x, b[i]]);
  if (b.length < a.length) return b.map((x, i) => [a[i], x]);

  return a.map((x, i) => [x, b[i]]);
};
const last = (s: string[] | string): string => s[s.length - 1];

const reformat = (s: string): string => {
  const [letters, digits] = splitIntoDigitsAndLetters(s);

  if (Math.abs(letters.length - digits.length) > 1) return "";

  const joint = zip(letters, digits)
    .reduce(
      (acc, [letter, digit]) => `${acc}${letter}${digit}`,
      "",
    );

  if (letters.length < digits.length) return `${last(digits)}${joint}`;
  if (letters.length > digits.length) return `${joint}${last(letters)}`;
  return joint;
};

describe("reformat the string", () => {
  it("case 1", () => {
    expect(reformat("a0b1c2")).toEqual("a0b1c2");
  });

  it("case 2", () => {
    expect(reformat("0b1c")).toEqual("b0c1");
  });

  it("case 3", () => {
    expect(reformat("a0b1c")).toEqual("a0b1c");
  });

  it("case 4", () => {
    expect(reformat("leetcode")).toEqual("");
  });

  it("case 5", () => {
    expect(reformat("1229857369")).toEqual("");
  });

  it("case 6", () => {
    expect(reformat("covid2019")).toEqual("c2o0v1i9d");
  });

  it("case 7", () => {
    expect(reformat("covi20191")).toEqual("1c2o0v1i9");
  });
});
