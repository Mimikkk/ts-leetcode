import { A, N } from "@shared/modules";
export {};

const encoder = new TextEncoder();
const transformString = (s: string) => A.N.sum([...encoder.encode(s)].map((c) => c - 96).map(N.D.sum));

const transformNum = (num: number, k: number) => {
  while (--k && num > 9) num = N.D.sum(num);
  return num;
};

const getLucky = (s: string, k: number) => transformNum(transformString(s), k);

describe("get Lucky", () => {
  it("case 1", () => {
    expect(getLucky("iiii", 1)).toBe(36);
  });
  it("case 2", () => {
    expect(getLucky("leetcode", 2)).toBe(6);
  });
  it("case 3", () => {
    expect(getLucky("zbax", 2)).toBe(8);
  });
  it("case 4", () => {
    expect(getLucky("hvmhoasabaymnmsd", 1)).toBe(79);
  });
});