import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const capitalize = (str: string) =>
  str.length > 2 ? str[0].toUpperCase() + str.slice(1).toLowerCase() : str.toLowerCase();

const capitalizeTitle = (title: string): string => title.split(" ").map(capitalize).join(" ");

describe("capitalize title", () => {
  it("should capitalize the title", () => {
    expect(capitalizeTitle("the great mouse detective")).toBe("The Great Mouse Detective");
  });
});