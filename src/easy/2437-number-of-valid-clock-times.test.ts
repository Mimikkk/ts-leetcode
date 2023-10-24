import { expect } from "vitest";

const countTime = (time: string): number => {
  let combinations = 1;

  if (time[0] === "?" && time[1] === "?") combinations *= 24;
  else if (time[0] === "?") combinations *= +time[1] <= 3 ? 3 : 2;
  else if (time[1] === "?") combinations *= time[0] === "2" ? 4 : 10;

  if (time[3] === "?") combinations *= 6;
  if (time[4] === "?") combinations *= 10;

  return combinations;
};

describe("2437", () => {
  it("case 1", () => expect(countTime("?5:00")).toBe(2));

  it("case 2", () => expect(countTime("0?:0?")).toBe(100));

  it("case 3", () => expect(countTime("??:??")).toBe(1440));

  it("case 4", () => expect(countTime("?0:?6")).toBe(12));
});
