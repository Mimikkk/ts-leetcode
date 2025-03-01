import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const reformatNumber = (number: string): string => number.replace(/\D/g, "").replace(/(...?(?=..))/g, "$1-");

describe("reformat number", () => {
  it("case 1", () => {
    expect(reformatNumber("123 456 7890")).toBe("123-456-78-90");
  });
});
