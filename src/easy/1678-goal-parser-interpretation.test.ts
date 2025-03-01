import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const interpret = (command: string) => command.replace(/\(al\)/gi, "al").replace(/\(\)/gi, "o");

describe("goal parser", () => {
  it("case 1", () => {
    expect(interpret("G()(al)")).toBe("Goal");
    expect(interpret("G()()()(al)(al)(al)")).toBe("Goooalalal");
  });
});
