import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

import { box } from "./box.ts";
import { Chalk } from "./chalk.ts";
import { trimlines } from "./text.ts";

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
