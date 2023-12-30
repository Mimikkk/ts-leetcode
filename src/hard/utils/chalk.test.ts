import { describe } from "vitest";
import { Chalk } from "./chalk.js";

describe("Draw - Chalk", () => {
  const { clear, chalk } = Chalk;

  it("should color a string", () => {
    expect(chalk("Hello, world!", "red")).toBe("\x1b[31mHello, world!\x1b[0m");
  });

  it("should remove coloring from a string", () => {
    expect(clear(chalk("Hello, world!", "red"))).toBe("Hello, world!");
  });
});
