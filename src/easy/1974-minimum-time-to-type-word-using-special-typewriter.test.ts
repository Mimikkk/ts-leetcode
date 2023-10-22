import { A } from "@shared/modules";

const asCode = (char: string) => char.charCodeAt(0);

const findDistance = ([a, b]: [number, number]) => {
  const difference = Math.abs(a - b);

  return Math.min(difference, 26 - difference) + 1;
};

const minTimeToType = (word: string) => A.N.sum(A.windows(["a", ...word].map(asCode), 2).map(findDistance));

describe("min time", () => {
  it("case 1", () => {
    expect(minTimeToType("hello")).toBe(25);
  });

  it("case 2", () => {
    expect(minTimeToType("world")).toBe(34);
  });

  it("case 3", () => {
    expect(minTimeToType("helloworld")).toBe(63);
  });

  it("case 4", () => {
    expect(minTimeToType("helloworldhello")).toBe(85);
  });

  it("case 5", () => {
    expect(minTimeToType("helloworldhellohelloworld")).toBe(148);
  });
});
