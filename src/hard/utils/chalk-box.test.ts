import { box } from "./box.js";
import { Chalk } from "./chalk.js";
import { trimlines } from "./text.js";

describe("Draw - Box with Chalk", () => {
  it("should box and color a string", () => {
    expect(Chalk.chalk(box("Hello, world!"), "red")).toBe(
      trimlines`
\x1b[31m╭─────────────╮
│Hello, world!│
╰─────────────╯\x1b[0m
      `,
    );
  });

  it("should box a string with color", () => {
    expect(box(Chalk.chalk("Hello, world!", "red"))).toBe(
      trimlines`
      ╭─────────────╮
      │\x1b[31mHello, world!\x1b[0m│
      ╰─────────────╯
      `,
    );
  });
});
