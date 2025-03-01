import { R } from "@shared/modules/records.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const areOccurrencesEqual = (s: string) => R.values(R.counter(s)).every((v, _, values) => v === values[0]);

describe("are oc equal", () => {
  it("case 1", () => {
    expect(areOccurrencesEqual("abc")).toBe(true);
  });
  it("case 2", () => {
    expect(areOccurrencesEqual("tveixwaeoezcf")).toBe(false);
  });
});
