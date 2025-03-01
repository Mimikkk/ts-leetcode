import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

import { Chalk } from "./chalk.ts";

describe("Draw - Chalk", () => {
  const { clear, chalk } = Chalk;

  it("should color a string", () => {
    expect(chalk("Hello, world!", "red")).toBe("\x1b[31mHello, world!\x1b[0m");
  });

  it("should remove coloring from a string", () => {
    expect(clear(chalk("Hello, world!", "red"))).toBe("Hello, world!");
  });
});
