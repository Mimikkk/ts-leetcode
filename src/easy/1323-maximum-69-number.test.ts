export {};

const maximum69Number = (num: number): number => (`${num}`.indexOf("6") === -1 && num) || +`${num}`.replace("6", "9");

describe("maximum 69 number", () => {
  it("case 1", () => {
    expect(maximum69Number(9669)).toBe(9969);
  });

  it("case 2", () => {
    expect(maximum69Number(9996)).toBe(9999);
  });

  it("case 3", () => {
    expect(maximum69Number(9999)).toBe(9999);
  });

  it("case 4", () => {
    expect(maximum69Number(696)).toBe(996);
  });
});
