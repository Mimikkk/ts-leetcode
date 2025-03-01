import { R } from "@shared/modules/records.ts";

import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const digitCount = (num: string) => {
  const counter = R.counter(num);

  return [...num].every((c, i) => (counter[i] || 0) === +c);
};

describe("digit count", () => {
  it("case 1", () => {
    expect(digitCount("1210")).toBeTruthy();
    expect(digitCount("200")).toBeFalsy();
    expect(digitCount("030")).toBeFalsy();
  });
});
