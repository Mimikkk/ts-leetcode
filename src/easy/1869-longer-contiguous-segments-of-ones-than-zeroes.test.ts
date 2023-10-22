export {};

const max = (nums: number[]) => Math.max(...nums) ?? NaN;
const length = (str: string) => str.length;

const checkZeroOnes = (s: string) =>
  max(s.match(/1+/g)?.map(length) || [0]) > max(s.match(/0+/g)?.map(length) || [0]);

describe("check zero ones", () => {
  it("case 1", () => {
    expect(checkZeroOnes("1101")).toEqual(true);
  });

  it("case 2", () => {
    expect(checkZeroOnes("111000")).toEqual(false);
  });

  it("case 3", () => {
    expect(checkZeroOnes("1")).toEqual(true);
  });
});