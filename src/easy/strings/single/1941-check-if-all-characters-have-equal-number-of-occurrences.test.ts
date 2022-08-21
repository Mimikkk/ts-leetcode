import { R } from "shared/modules";

const areOccurrencesEqual = (s: string) =>
  R.values(R.counter(s)).every((v, _, values) => v === values[0]);

describe("are oc equal", () => {
  it("case 1", () => {
    expect(areOccurrencesEqual("abc")).toBe(true);
  });
  it("case 2", () => {
    expect(areOccurrencesEqual("tveixwaeoezcf")).toBe(false);
  });
});