export {};

const maximumTime = (time: string): string => {
  let [a, b, _, c, d] = time.split("");
  if (a === "?") {
    if (+b > 3) a = "1";
    else a = "2";
  }
  if (b === "?") {
    if (a === "2") b = "3";
    else b = "9";
  }
  if (c === "?") c = "5";
  if (d === "?") d = "9";
  return `${a}${b}:${c}${d}`;
};

describe("max time by replacing hidden digits", () => {
  it("case 1", () => {
    expect(maximumTime("2?:?0")).toEqual("23:50");
  });
});